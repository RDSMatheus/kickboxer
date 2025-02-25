'use client';

import React from 'react';
import { Title } from '../title/Title';
import style from './Faq.module.css';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'Preciso ter experiência?',
    answer:
      'Não, nosso programa atende desde iniciantes até praticantes avançados. Cada treino é adaptável ao seu nível.',
  },
  {
    question: 'Preciso de muito espaço?',
    answer:
      ' Uma área mínima para executar golpes e se movimentar já é suficiente.',
  },
  {
    question: 'Posso combinar com treinos na academia?',
    answer: 'Sim, nosso programa complementa suas aulas presenciais.',
  },
];

export const Faq = () => {
  const [activeTab, setActiveTab] = React.useState<null | number>(null);

  function handleActiveTab(index: number) {
    if (index === activeTab) {
      setActiveTab(null);
      return;
    }
    setActiveTab(index);
  }

  return (
    <section className={`container ${style.faq}`}>
      <Title title="Perguntas Frequentes" />
      <dl>
        {faqs.map((faq, index) => (
          <div className={style.faqItem} key={index}>
            <dt
              onClick={() => handleActiveTab(index)}
              className={activeTab === index ? style.active : ''}
            >
              {faq.question}
            </dt>
            <dd className={activeTab === index ? style.active : ''}>
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
