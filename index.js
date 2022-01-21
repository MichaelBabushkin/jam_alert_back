const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const json2csv = require('json2csv').Parser;


// const movie = "https://www.imdb.com/title/tt0386676/?ref_=hm_stp_pvs_piv_tt_i_5" ;


// (async() => {
//     let imdbData = [];
//     const response = await request({
//         uri:movie,
//         headers: {
//             accept:
//             "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//             "accept-encoding": "gzip, deflate, br",
//             "accept-language": en-US,en;q=0.9,ru;q=0.8,he;q=0.7"
//         },
//         gzip:true,
//     });


//     let $ = cheerio.load(response);
//     let title = $('div[class="title_wrapper"] > h1').text().trim();
//     let rating = $('div[class="ratingValue"] > strong > span').text();
//     let summary = $('div[class="summary_text"]').text().trim();
//     let releaseData = $('a[title="See more release dates"] ').text().trim();

//     imdbData.push({
//         title,rating,summary,releaseData,
//     });
//     const j2cp = new json2csv();
//     const csv = j2cp.parse(imdbData);

//     fs.writeFileSync("./imdb.csv", csv, "utf-8");
// }

// )()


// let parsedText = '<div data-v-0828760d="" data-v-5e5d0d28="" class="feed_item_gallery" id="feed_item_0" is-platinum="true"><div data-v-0828760d="" class="feed_item_wrapper"><div data-v-0828760d="" class="item_img" style="background-image: url(&quot;//assets.yad2.co.il/yad2site/y2assets/images/pages/feed/feed_re_placeholder_small.png&quot;);"><img data-v-0828760d="" src="https://img.yad2.co.il/Pic/202110/13/2_6/o/y2_3_997534_20211013.jpeg?l=5&amp;c=3&amp;w=215&amp;h=215" alt=""> <span data-v-0828760d="" class="agency_name">\n                MY נכסים\n            </span> <div data-v-0828760d="" class="social_icon"><div data-v-019fb2a8="" data-v-0828760d="" class="like_icon_wrapper"><button data-v-019fb2a8="" data-test-id="LIKE_AD" class="like_icon y2i_like"></button> <\!----></div></div></div> <div data-v-0828760d="" class="item_content"><span data-v-0828760d="" class="update">עודכן היום</span> <span data-v-0828760d="" class="price">2,900 ₪</span> <span data-v-0828760d="" class="address">טבריה 18</span> <div data-v-0828760d="" class="second_title"><span data-v-0828760d="">דירה, מסדה, חיפה</span></div> <div data-v-0828760d="" class="table"><dl data-v-0828760d="" class="cell"><dt data-v-0828760d="" class="value">3.5</dt> <dt data-v-0828760d="" class="label">חדרים</dt></dl><dl data-v-0828760d="" class="cell"><dt data-v-0828760d="" class="value">2</dt> <dt data-v-0828760d="" class="label">קומה</dt></dl><dl data-v-0828760d="" class="cell"><dt data-v-0828760d="" class="value">87 </dt> <dt data-v-0828760d="" class="label">מ"ר</dt></dl></div></div></div></div>';
// console.log(parsedText);