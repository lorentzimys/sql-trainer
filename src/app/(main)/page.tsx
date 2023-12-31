/* eslint-disable @next/next/no-img-element */
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Link,
  Section,
} from "@radix-ui/themes";
import Cookies from "js-cookie";
import Image from "next/image";

import { COOKIE_NAME } from "@app/utils/cookie";

import styles from "./page.module.css";

const abVariants = {
  "0": {
    title: "разработчиков",
    color: "#b91c1c",
  },
  "1": {
    title: "аналитиков",
    color: "#1d4ed8",
  },
  "2": {
    title: "всех",
    color: "#4d7c0f",
  },
};

export default function Home() {
  const abTestCookie = Cookies.get(COOKIE_NAME);

  console.log("abTestCookie", abTestCookie);

  const cookieValue = abTestCookie ?? null;
  const experimentVariantIndex = cookieValue?.split("$")[1] ?? "0";
  const experimentVariant = abVariants[experimentVariantIndex];
  const { color, title } = experimentVariant;

  return (
    <main>
      <Flex width="100%" direction="column">
        <Section className={styles.section1}>
          <Box className="container flex flex-col mx-auto px-8 justify-center gap-16 md:flex-row">
            <div className="flex flex-col w-[40%] gap-4">
              <span className="text-5xl">
                Учим <br />
                понимать SQL
              </span>

              <span style={{ color }} className={`text-4xl font-mono`}>
                {title}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <Link href="/guide">
                <div className={styles.card1}>
                  <Heading as="h3" size="7">
                    Курс по SQL
                  </Heading>
                  <span className="text">
                    Пошаговый интерактивный курс с практическими заданиями
                  </span>
                </div>
              </Link>
              <div className="flex flex-1 flex-row gap-4">
                <Link href="/guide" className={styles.card2}>
                  <Heading as="h3" size="7">
                    Тренажер с задачами
                  </Heading>
                  <AspectRatio ratio={16 / 8}>
                    <img alt="select" src="/select.svg" />
                  </AspectRatio>
                </Link>
                <Link href="/sandbox" className={styles.card3}>
                  <Heading as="h3" size="7">
                    Песоница
                  </Heading>
                  <span className="text">
                    Пространство для свободного знакомства со структурой наших
                    баз данных
                  </span>
                </Link>
              </div>
            </div>
          </Box>
        </Section>
        <Section className="h-screen w-ful bg-slate-500">
          <Box className="container mx-auto">
            <Heading>
              Получи необходимые знания по SQL на нашем бесплатном курсе
            </Heading>
          </Box>
        </Section>
        <Section className={styles.section3}>
          <Box className={styles.section3_background}></Box>
          <Box className={styles.section3_content}>
            <div className="flex flex-col gap-4">
              <h2>Практикуйся в решении задач на удобном тренажере</h2>
              <div className="flex flex-row">
                <div>
                  <span></span>
                </div>
                <div className="flex-1 flex-shrink">
                  <Image
                    src="/sql_demo.svg"
                    alt="logo"
                    width="100"
                    height="100"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </Box>
        </Section>
        {/* <Box height="100%" className="bg-slate-300">
        </Box> */}
      </Flex>
    </main>
  );
}
