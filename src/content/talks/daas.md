---
title: "DAAS 2026"
role: "PRESENTER"
event: "Regional Conference on Role of Statistics in Strengthening Sustainable Agriculture and Public Health"
date: "Apr 2026"
location: "Bangladesh Agricultural University, Mymensingh"
paperTitle: "Deep Learning-Based Multi-Variety Rice Grain Classification Using Pre-Trained Convolutional Neural Networks"
description: "Deep Learning-Based Multi-Variety Rice Grain Classification Using Pre-Trained Convolutional Neural Networks"
image: "/images/daas-logo.png"
external_url: ""
---

## Conference Presentation

- **Conference:** DAAS 2026 — Regional Conference on Role of Statistics in Strengthening Sustainable Agriculture and Public Health
- **Venue:** Bangladesh Agricultural University, Mymensingh
- **Role:** Presenter
- **Date:** April 2026
- **Title:** *"Deep Learning-Based Multi-Variety Rice Grain Classification Using Pre-Trained Convolutional Neural Networks"*

---

### Abstract & Overview

Background: Accurately identifying rice varieties is critical to quality control in the food processing industry, for certification of seeds used by Bangladeshi farmers, and post-harvest processing. There are many rice varieties grown by Bangladeshi farmers. However, consumer markets are dominated by just a handful of visually similar types. Manual classification of these at the grain level can be both labour-intensive and error-prone. As such, it would not be practical at scale.

Methods: We propose an end-to-end deep learning pipeline to automate the classification of ten common Bangladeshi rice varieties from grain images. First, we apply preprocessing segmentation techniques, including Otsu thresholding and morphological operations, to isolate each grain from the background. Six CNN architectures (EfficientNetB0, MobileNetV2, VGG16, InceptionV3, Xception, and InceptionResNetV2) that have been pre-trained on other datasets are then fine-tuned using our augmented training set of 5,603 images. The performance of these six models is then evaluated on 1,200 test images. Three different ensemble strategies (hard voting, soft voting, and weighted voting) are also applied to combine the outputs from each model. The decisions made by these models are then validated through Grad-CAM saliency maps and LIME explanations.

Results: All six of the CNN models perform well. The lowest single CNN test accuracy was InceptionV3 at 84.67%, while Xception scored the highest at 93.08%. The performance of all six models was improved when they were combined through ensemble voting. Soft voting and weighted voting achieved accuracies of 96.25% and 96.17%, respectively. Grad-CAM visualizations demonstrate that the models attend to discriminative grain-surface features, and LIME analysis demonstrates consistent classification rationale between all six architectures.

Conclusion: This work has determined that a multi-architecture ensemble system, combined with post-hoc explainability techniques, can provide near-perfect classification on a challenging ten-class Bangladeshi rice dataset. Additionally, this work provides evidence that transparent automated grain-sorting technology could feasibly be developed for agri-food quality assurance in rice-producing regions.


### Key Highlights
- **Multi-Objective Optimization:** Jointly optimizes for forecast accuracy and floating-point operations (FLOPs) under strict resource budgets.
- **Sparse-Data Adaptation:** Incorporates domain-specific statistical regularizers to maintain high performance in sparsely monitored agricultural zones.
- **Sustainable Deployment:** Enables low-power edge and localized server execution for real-time agricultural advisory systems.
