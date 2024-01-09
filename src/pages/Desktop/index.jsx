import React from "react";

import { Img, Text } from "components";

const DesktopPage = () => {
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-roboto items-center justify-end mx-auto pt-[34px] w-full">
        <header className="bg-gray-500_30 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="md:flex-1 h-[65px] sm:h-auto md:ml-[0] ml-[49px] md:mt-0 my-[5px] object-cover rounded-[32px] w-[5%] md:w-full"
            src="images/img_ellipse1.png"
            alt="ellipseOne"
          />
          <div className="flex md:ml-[0] ml-[849px] mr-10 relative w-[31%] md:w-full">
            <div className="bg-blue_gray-300 h-[75px] my-auto w-[29%]"></div>
            <ul className="flex flex-row sm:hidden items-start justify-between ml-[-94.16px] mt-[19px] w-[94%] z-[1] common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="mb-0.5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                >
                  <Text size="txtRobotoRomanBold24">Home</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="mt-0.5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                >
                  <Text size="txtRobotoRomanBold24">Options</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="mb-0.5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                >
                  <Text size="txtRobotoRomanBold24">Contact Us</Text>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start max-w-[1172px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[360px] justify-start w-full">
            <div className="h-[720px] relative w-full">
              <Img
                className="h-[720px] m-auto object-cover w-full"
                src="images/img_maskgroup.png"
                alt="maskgroup"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[65px] h-max inset-y-[0] items-start justify-start left-[7%] my-auto">
                <Text
                  className="italic text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoBlackItalic24"
                >
                  <>
                    Hi, I&#39;m Majo and I create custom Instagram and Facebook
                    Filters!
                  </>
                </Text>
                <Text
                  className="italic text-black-900 text-lg"
                  size="txtRobotoItalic18"
                >
                  <>
                    Whether you’re just starting to dip your feet in the world
                    of filtering your photographs or trying to up grade your
                    game at social media, you have come to the right place!
                    <br />
                    <br />
                    Also known as the Augmented Reality (AR) filter, the effect
                    is placed over the picture and videos you take on Facebook
                    and Instagram to give it a pleasant and vibrant look.
                    <br />
                    <br />
                    Keep scrolling to learn how can we help you!
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[167px] items-center justify-start md:ml-[0] ml-[78px] w-4/5 md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start md:mt-0 mt-[95px]">
                  <Text
                    className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtRobotoItalicBlack48"
                  >
                    WHY?
                  </Text>
                  <Text
                    className="italic text-black-900 text-lg w-full"
                    size="txtRobotoItalic18"
                  >
                    Instagram and Facebook filters, without a doubt, add a
                    creative touch to your stories, surprising and enchanting
                    your followers. But they are also an excellent tool for
                    brand positioning and establishing yourself on social media.
                  </Text>
                </div>
                <Img
                  className="h-[359px] md:h-auto object-cover"
                  src="images/img_rectangle6.png"
                  alt="rectangleSix"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Img
                  className="h-[358px] md:h-auto object-cover"
                  src="images/img_rectangle7.png"
                  alt="rectangleSeven"
                />
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[98px]">
                  <Text
                    className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtRobotoItalicBlack48"
                  >
                    Marketing AR DATA
                  </Text>
                  <Text
                    className="italic mt-[26px] text-black-900 text-lg"
                    size="txtRobotoItalic18"
                  >
                    <>
                      Augmented Reality experiences have a 94% higher conversion
                      rate. Users connect 30% more with a brand through AR
                      Advertising. 3 out of 4 users would pay more for a product
                      if they see it in a Virtual <br />
                      Try-On. (According to the latest study by Deloitte & Snap
                      Inc.)
                    </>
                  </Text>
                  <Text
                    className="italic md:ml-[0] ml-[41px] mt-[115px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                    size="txtRobotoItalicBlack32"
                  >
                    Know our options
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-librefranklin items-center justify-start mt-[110px] w-full">
          <div className="bg-blue_gray-300 flex flex-col items-end justify-end p-[67px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col justify-start mr-[493px] mt-[3px] w-[38%] md:w-full">
              <Text
                className="italic md:ml-[0] ml-[90px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtRobotoItalicBlack48"
              >
                OUR CLIENTS SAY
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[42px] w-full">
                <Img
                  className="md:flex-1 h-24 sm:h-auto object-cover w-[14%] md:w-full"
                  src="images/img_instagramcircle.png"
                  alt="instagramcircle"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[116px] w-1/5 md:w-full">
                  <Img
                    className="h-[141px] md:h-auto object-cover rounded-bl-[70px] rounded-br-[70px] w-full"
                    src="images/img_ellipse5.png"
                    alt="ellipseFive"
                  />
                </div>
                <Img
                  className="md:flex-1 h-24 sm:h-auto md:ml-[0] ml-[241px] object-cover w-[14%] md:w-full"
                  src="images/img_twitter.png"
                  alt="twitter"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[107px] mt-[38px] text-black-900 text-center text-lg"
                size="txtLibreFranklinRomanRegular18"
              >
                “ Awesome job, it boosted my reach”
              </Text>
            </div>
          </div>
          <div className="h-[74px] md:px-5 relative w-full">
            <Img
              className="h-[54px] ml-8 my-auto"
              src="images/img_group11.svg"
              alt="groupEleven"
            />
            <Text
              className="absolute bg-gray-500_30 h-full inset-[0] justify-center m-auto max-w-[1920px] md:max-w-full sm:px-5 px-[35px] py-[22px] text-2xl md:text-[22px] text-black-900 text-right sm:text-xl w-max"
              size="txtLibreFranklinRomanRegular24"
            >
              @ 2022 Ar Filters Majito - Maria José Mercau
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopPage;
