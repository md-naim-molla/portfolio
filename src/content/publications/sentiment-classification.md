---
title: "A Multi-Model Approach to English-Bangla Sentiment Classification of Government Mobile Banking App Reviews"
author: "MN Molla, MMM Fahim, Md. Binyamin, MR Karim"
external_url: "https://www.researchgate.net/publication/403866800_A_Multi-Model_Approach_to_English-Bangla_Sentiment_Classification_of_Government_Mobile_Banking_App_Reviews"
description: "A multi-model machine learning and transformer framework for classifying user sentiment across English, Bangla, and code-mixed reviews of government mobile financial services."
---

## Abstract

Government-backed Mobile Financial Services (MFS) in developing countries generate massive volumes of user feedback written in English, Bengali, and code-mixed (Banglish) text. Classifying sentiment from such unstructured and informal data presents substantial challenges due to vocabulary noise, morphological richness, and lack of standardized orthography.

In this research, we propose a multi-model comparative and ensemble architecture to classify user sentiment in government mobile banking application reviews. We evaluate multiple classical machine learning models, recurrent neural network architectures, and multilingual transformer models (including multilingual BERT and Banglish-BERT), comparing their performance across monolingual and code-mixed test benchmarks.

## Key Contributions

- **Dataset Construction & Curation**: Collected, cleaned, and labeled user review datasets spanning English, standard Bengali, and romanized Banglish scripts.
- **Multi-Model Pipeline**: Implemented and benchmarked TF-IDF feature pipelines with machine learning classifiers (SVM, Logistic Regression, Random Forest, XGBoost) alongside transformer models (BERT-base-multilingual, Banglish-BERT).
- **Error Analysis & Interpretability**: Conducted detailed error characterization across code-mixed and informal linguistic patterns, identifying key drivers of misclassification in resource-constrained multilingual environments.

## Results & Impact

The empirical findings demonstrate that transformer-based representations significantly outperform traditional n-gram and bag-of-words approaches on code-mixed and noisy text, providing a reliable automated framework for continuous user feedback surveillance in public digital services.

