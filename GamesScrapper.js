

    
    async function run () {

    const puppeteer = require('puppeteer');
    const url = "https://www.haifa-stadium.com/schedule_of_matches_in_the_stadium/";
    let events =  [];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForSelector('.elementor-text-editor > p');
        let games = await page.evaluate(() => {
            let results = [];
            let items = document.querySelectorAll('.elementor-text-editor > p');
            items.forEach((item) => {
                (item.innerText !=='HEB' && item.innerText !=='Ar' && item.innerText !=='') ?
                results.push(
                     item.innerText.replace(/\n/g,' '),
                ):null;
            });
            return results;
        });

    events =  prepareGamesToSending(games);
    // await sendScheduleToMail(events);
    await browser.close();
 return events;
    
}

function prepareGamesToSending(games){
    let numOfGames = games.length/3;
    let gamesData = {};
    for (let i = 0; i < numOfGames; i++) {
        gamesData [i]= {};
        gamesData[i]['first_team'] = games[3*i];
        gamesData[i]['game_time'] = {};
        gamesData[i]['game_time']['day'] =  games[3*i+1].split("/")[0];
        gamesData[i]['game_time']['month'] =  games[3*i+1].split("/")[1];
        gamesData[i]['game_time']['year'] =  games[3*i+1].split("/")[2].split(" ")[0];
        gamesData[i]['game_time']['hour'] =  games[3*i+1].split("/")[2].split(" ")[1].split(":")[0];
        gamesData[i]['game_time']['minute'] =  games[3*i+1].split("/")[2].split(" ")[1].split(":")[1];
        gamesData[i]['second_team'] = games[3*i+2];
    }

        let events = [];

        Object.keys(gamesData).forEach(function (key) {

        events.push(
        {
            title: gamesData[key]['first_team'] + ' vs ' +  gamesData[key]['second_team'],
            start: [
                parseInt(gamesData[key]['game_time']['year']),
                parseInt(gamesData[key]['game_time']['month']),
                parseInt(gamesData[key]['game_time']['day']), 
                parseInt(gamesData[key]['game_time']['hour']), 
                parseInt(gamesData[key]['game_time']['minute'])],
            duration: { hours: 2, minutes: 0 }
        }
        )
    })
    return events;
}

exports.run = run
