import { Box, Flex, Section } from "@radix-ui/themes";
import Image from "next/image";
import styles from "./page.module.css";

export default function Guide() {
  return (
    <main>
      <Flex width="100%" direction="column">
        <Section className={styles.hero}>

          <div className="flex flex-1 flex-col gap-2 max-w-[600px]">
            <span className="text-5xl">Интерактивный курс по SQL</span>
            <span className="text-1xl">
              Всесторонний курс по SQL, спроектированный так, чтобы навсегда изменить
              твоё отношение к SQL. Мы вместе пройдём путь, чтобы понять как этот язык
              работает, и получим все необходимые навыки для эффективного
              применения его на работе.  
            </span>
            
          </div>
          <Box className="container flex mx-auto justify-center gap-4">
            {/* <div className="flex flex-1 flex-col w-1 gap-4">
              <div className={styles.card1}>
                <h3 className="text-2xl">Курс по SQL</h3>
                <span className="text">
                  Пошаговый интерактивный курс с практическими заданиями
                </span>
              </div>
              <div className="flex flex-1 flex-row gap-4">
                <div className={styles.card2}>Тренажер с задачами</div>
                <div className={styles.card3}>Песоница</div>
              </div>
            </div> */}
          </Box>
        </Section>
      </Flex>
    </main>
  );
}
