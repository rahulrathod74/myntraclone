import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-100 mt-20">
      <div className="flex justify-center gap-20 p-10">
        <ul className="text-gray-500 space-y-1">
          <li className="font-bold text-black">ONLINE SHOPPING</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home & Living</li>
          <li>Beauty</li>
          <li>Gift Cards</li>
          <li>Myntra Insider</li>
          <li
            style={{
              marginTop: "40px",
              fontWeight: "bold",
              color: "black",
              fontSize: "14px",
            }}
          >
            USEFUL LINKS
          </li>
        </ul>
        <ul className="text-gray-500 space-y-1">
          <li className="font-bold text-black">CUSTOM POLICIES</li>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>T&C</li>
          <li>Terms Of Use</li>
          <li>Track Orders</li>
          <li>Shipping</li>
          <li>Cancellation</li>
          <li>Returns</li>
          <li>Privacy policy</li>
          <li>Grievance Officer</li>
        </ul>
        <div>
          <li className="list-none font-bold">
            EXPRIENCE MYNTRA APP ON MOBILE
          </li>
          <div className="flex mt-5 gap-2">
            <img
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt=""
              width={150}
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              alt=""
              width={150}
            />
          </div>
          <li className="font-bold list-none text-xs mt-4">KEEP IN TOUCH</li>
          <div className="flex mt-10 gap-2">
            <img
              src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
              alt=""
              className="w-6 h-6"
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
              alt=""
              className="w-6 h-6"
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
              alt=""
              className="w-6 h-6"
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
              alt=""
              className="w-6 h-6"
            />
          </div>
        </div>
        <div>
          <div className="flex">
            <img
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              alt=""
              className="w-10 h-10"
            />
            <p className="w-56">
              <span className="font-bold">100% ORIGINAL</span>guarantee for all
              products at myntra.com
            </p>
          </div>
          <div className="flex mt-10">
            <img
              src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
              alt=""
              className="w-10 h-10"
            />
            <p className="w-56">
              <span className="font-bold">Return within 14days</span> of
              receiving your order
            </p>
          </div>
        </div>
      </div>
      <ul className="text-gray-500 ml-52 ">
        <li>Blog</li>
        <li>Careers</li>
        <li>Site Map</li>
        <li>Corporate Information</li>
        <li>Whitehat</li>
        <li>Cleartrip</li>
      </ul>
      <div className=" flex gap-2">
        <p className=" ml-52 mt-5 text-xs font-bold">POPULAR SEARCHES</p>
        <div className=" border border-gray-500 border-solid   ml-30 mt-7 w-2/3 h-0 bg-gray-500"></div>
      </div>
      <p className="w-3/4 m-auto p-5 text-gray-500">
        Makeup | Dresses For Girls | T-Shirts| Sandals | Headphones | Babydolls
        | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes |
        Reebok Shoes | Puma Shoes | Boxers \ Wallets | Tops |Earrings | Fastrack
        Watches | Kurtis | Nike | Smart Watches | Titan | Watches | Designer
        Blouse | Gowns Rings | Cricket Shoes | Forever 21 Eye |Makeup | Photo |
        Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick Saree |
        Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit |
        Chinos | Shoes| Adidas Shoes | Woodland Shoes | Jewellery | Designers
        Sarees
      </p>

      <div className="flex justify-center gap-52 p-10 text-gray-500">
        <p>
          In case of any concern,
          <span className="font-bold text-blue-600">Contact Us</span>{" "}
        </p>
        <p>© 2024 www.myntra.com. All rights reserved.</p>
        <p>A Flipkart company</p>
      </div>
      <div
        className=" border border-gray-500 border-solid   ml-52 h-0 bg-gray-500"
        style={{ width: "76%" }}
      ></div>

      <div className=" flex justify-around mt-10">
        <ul className="text-gray-500">
          <p className="font-bold">Registered Office Address</p>
          <li className="mt-10">Buildings Alyssa,</li>
          <li>Begonia and Clover situated in Embassy Tech Village,</li>
          <li>Outer Ring Road,</li>
          <li>Devarabeesanahalli Village,</li>
          <li>Varthur Hobli,</li>
          <li>Bengaluru – 560103, India</li>
        </ul>
        <ul className="mt-40 text-gray-500">
          <li>CIN: U72300KA2007PTC041799</li>
          <li>
            Telephone:
            <span className="text-blue-500 font-bold">
              +91-80-61561999
            </span>{" "}
          </li>
        </ul>
      </div>
      <div
        className=" border border-gray-500 border-solid   ml-52 mt-5 h-0 bg-gray-500"
        style={{ width: "76%" }}
      ></div>
      <div
        style={{
          paddingLeft: "53px",
          width: "80%",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <h6 className="font-bold text-sm text-gray-600">
          ONLINE SHOPPING MADE EASY AT MYNTRA
        </h6>
        <p className="text-sm text-gray-500">
          If you would like to experience the best of online shopping for men,
          women and kids in India, you are at the right place. Myntra is the
          ultimate destination for fashion and lifestyle, being host to a wide
          array of merchandise including clothing, footwear, accessories,
          jewellery, personal care products and more. It is time to redefine
          your style statement with our treasure-trove of trendy items. Our
          online store brings you the latest in designer products straight out
          of fashion houses. You can shop online at Myntra from the comfort of
          your home and get your favourites delivered right to your doorstep.
        </p>
        <h6 className="font-bold text-sm text-gray-600 mt-10">
          BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
        </h6>
        <p className="text-sm text-gray-500">
          Be it clothing, footwear or accessories, Myntra offers you the ideal
          combination of fashion and functionality for men, women and kids. You
          will realise that the sky is the limit when it comes to the types of
          outfits that you can purchase for different occasions.
        </p>
        <h6 className="font-bold text-sm text-gray-600 mt-10">
          MYNTRA INSIDER
        </h6>
        <p className="text-sm text-gray-500">
          Every online shopping experience is precious. Hence, a cashless
          reward-based customer loyalty program called Myntra Insider was
          introduced to enhance your online experience. The program is
          applicable to every registered customer and measures rewards in the
          form of Insider Points.
        </p>
        <p className="text-sm text-gray-500 mt-10">
          There are four levels to achieve in the program, as the Insider Points
          accumulate. They are - Insider, Select, Elite or Icon. Apart from
          offering discounts on Myntra and partner platform coupons, each tier
          comes with its own special perks.
        </p>
        <ul className="list-disc mt-10 text-gray-500">
          <p className="font-bold text-gray-700">Insider</p>
          <li className="ml-10">
            Opportunity to master any domain in fashion with tips from celebrity
            stylists at Myntra Masterclass sessions.
          </li>
          <li className="ml-10">Curated collections from celeb stylists.</li>
        </ul>
        <ul className="list-disc mt-10 text-gray-500">
          <p className="font-bold text-gray-700">Elite</p>
          <li className="ml-10">
          VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.
          </li>
          <li className="ml-10">Exclusive early access to Limited Edition products.</li>
        </ul>
        <ul className="list-disc mt-10 text-gray-500">
          <p className="font-bold text-gray-700">Elite</p>
          
          <li className="ml-10">Chance to get on guest lists for special events.</li>
        </ul>
        <div className="list-disc mt-10 text-gray-500">
        <h6 className="font-bold text-sm text-gray-700 mt-10">Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</h6>
        <p>The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.</p>
        <p className="mt-5">Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.</p>
        <p className="mt-5">Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.</p>
        <p className="mt-5">If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.</p>

        <div className="text-gray-500 ml-10">
        <h6 className="font-bold text-sm text-gray-700 mt-10"><span className="text-gray-400">1.</span>Myntra Studio - The Personalised Keep Up With What Your Favourite Fashion Icons Are Upto</h6>
        <p className="text-sm">The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.</p>
        <p className="text-sm mt-10">Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.</p>
        </div>
        <div className="text-gray-500 ml-10">
        <h6 className="font-bold text-sm text-gray-700 mt-10"><span className="text-gray-400">2.</span>Quick Fashion Tip And Tricks Upto</h6>
       
        <p className="text-sm mt-10">Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.</p>
        </div>
        <div className="text-gray-500 ml-10">
        <h6 className="font-bold text-sm text-gray-700 mt-10"><span className="text-gray-400">3.</span>Updates on What Is Trending and New Product Launches</h6>
       
        <p className="text-sm mt-5">Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.</p>
        <p className="text-sm mt-5">Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.</p>
        </div>
        <div className="text-gray-500 ml-10">
        <h6 className="font-bold text-sm text-gray-700 mt-10"><span className="text-gray-400">4.</span>Explicit Step-By-Step Beauty Routines From Experts</h6>
        <p className="text-sm mt-5">Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.</p> 
        </div>
        <div className="text-gray-500 ml-10">
        <h6 className="font-bold text-sm text-gray-700 mt-10"><span className="text-gray-400">5.</span>Celebrity Confessions And A Look Into Their Lives</h6>
        <p className="text-sm mt-5">JA bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.</p> 
        <p className="text-sm mt-5">If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.</p> 
        </div>
        </div>
      </div>
      <div style={{width:"75%",margin:"auto" ,color:"gray", paddingBottom:"50px"}}>
        <h6 className="font-bold font-sans text-gray-700">MYNTRA APP</h6>
        <p >Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!</p>

        <h6 className="font-bold font-sans text-gray-700">HISTORY OF MYNTRA</h6>
        <p className="text-sm ">MBecoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.</p>
        <p className="mt-5">The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</p>
        <h6 className="font-bold font-sans text-gray-700">SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h6>
        <p className="text-sm ">Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.</p>
        <p className="mt-5">Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>
      </div>
    </div>
  );
};

export default Footer;
