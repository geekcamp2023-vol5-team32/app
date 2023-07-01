import { Header } from "../../../components/header";
import { Box, Image } from "@chakra-ui/react";
import { Member } from "../../../components/member";
import { css } from "@emotion/react";

export default function Page() {
  return (
    <>
      <Header />
      <Box
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url(/liscript/img/bg-image.png);
          height: 86vh;
          @media (max-width: 768px) {
            height: 100%;
          }
        `}
      >
        <Box
          css={css`
            width: 90%;
            height: 70%;
            border: 1px solid #fff;
            border-radius: 7px;
            @media (max-width: 768px) {
              margin: 20px 0;
              height: 100%;
            }
          `}
        >
          <Member
            name="いまむゆせ"
            role="フロントエンド"
            company="PeachTech, TechUni所属"
            twitter="https://twitter.com/yuseidayo53"
          />
          <Member
            name="大川内和也"
            role="デザイン周り全般"
            company="STECH所属"
            twitter="https://twitter.com/Lf1Br"
          />
          <Member
            name="araki"
            role="バックエンド"
            company="42Tokyo"
            twitter="https://twitter.com/Gawingowin"
          />
          <Member
            name="Rei"
            role="バックエンド"
            company="工学院大学"
            twitter="https://twitter.com/Rei_1449"
          />
          <Member
            name="Tomoharu Watanabe"
            role="フロントバックインフラ"
            company="玉川大学"
            twitter="なし！"
          />
        </Box>
      </Box>
    </>
  );
}

// import { Box, Image } from "@chakra-ui/react";

// import { css } from "@emotion/react";

// import { Header } from "../../../components/header";

// export default function Page() {
//   return (
//     <>
//       <Header />
//       <Box
//         css={css`
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background-image: url(/liscript/img/bg-image.png);
//           height: 86vh;
//           @media (max-width: 768px) {
//             height: 100vh;
//           }
//         `}
//       >
//         <Box
//           css={css`
//             justify-content: center;
//             align-items: center;
//             width: 90%;
//             height: 70%;
//             border: 1px solid #fff;
//             border-radius: 7px;
//           `}
//         >
//           <Box
//             css={css`
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               text-align: center;
//               @media (max-width: 768px) {
//                 flex-direction: column;
//               }
//             `}
//           >
//             <div
//               css={css`
//         color: white;
//         font-weight: bold;
//         margin: 15px;
//         font-size: 25px;
//         display: block;
//         @media (max-width: 768px) {
//           display: none;
//       `}
//             >
//               いまむゆせ(今村悠聖) フロントエンド / PeachTech, TechUni所属
//             </div>
//             <div
//               css={css`
//                 display: none;
//                 @media (max-width: 768px) {
//                   display: block;
//                   color: white;
//                   margin: 20px;
//                   justify-content: center;
//                   align-items: center;
//                 }
//               `}
//             >
//               いまむゆせ(今村悠聖)
//               <br />
//               フロントエンド
//               <br />
//               PeachTech, TechUni所属
//             </div>
//             <div
//               css={css`
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 margin: 10px;
//               `}
//             >
//               <Image
//                 src="./img/twitter.png"
//                 css={css`
//                   width: 30px;
//                   height: 30px;
//                   border-radius: 5px;
//                   margin-right: 5px;
//                 `}
//               />
//               <a
//                 href="https://twitter.com/yuseidayo53"
//                 css={css`
//                   color: #1c9bef;
//                   font-size: 25px;
//                 `}
//               >
//                 yuseidayo53
//               </a>
//             </div>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }
