'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <TitleText
        title={
          <>
          Insights about the metaverse
          </>
        }
        textStyles="text-center font-weird"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((ins, ind) => (
            <InsightCard key={ind} {...ins} index={ind+1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
