---
title: "CROSS-REPRESENTATION TRANSFERABILITY OF ADVERSARIAL PERTURBATIONS:
						FROM SPECTROGRAMS TO AUDIO WAVEFORMS"
date: 2020-01-30
draft: false
---

## Abstract

This paper shows the susceptibility of spectrogram-based audio classifiers to adversarial attacks and the transferability of such attacks to audio waveforms. Some commonly used adversarial attacks to images have been applied to Mel-frequency and short-time Fourier transform spectrograms, and such perturbed spectrograms are able to fool a 2D convolutional neural network (CNN). Such attacks produce perturbed spectrograms that are visually imperceptible by humans. Furthermore, the audio waveforms reconstructed from the perturbed spectrograms are also able to fool a 1D CNN trained on the original audio. Experimental results on a dataset of western music have shown that the 2D CNN achieves up to 81.87% of mean accuracy on legitimate examples and such performance drops to 12.09% on adversarial examples. Likewise, the 1D CNN achieves up to 78.29% of mean accuracy on original audio samples and such performance drops to 27.91% on adversarial audio waveforms reconstructed from the perturbed spectrograms.

## Paper

The complete paper can be found [here](https://arxiv.org/pdf/1910.10106.pdf)!

## Audio Samples

The following tables show the signal-to-noise ratio (SNR) and the 2D CNN predictions of certain reconstructed audio from STFT spectrograms without attack (refered as None) and with attack (FGSM and BIM). The 2D CNN PREDICTION column refers to the genre predicted by the 2D CNN in each case, while the SNR column refers to the signal-to-noise ratio between the original audio file and the reconstructed.


#### ROCK (Original file):

{{< audio wav="/audio/paperwav/838_20_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |                    AUDIO RECONSTRUCTED            |
|----|-----------------|------|---------------------------------------------------|
|None|Rock             |120.31|{{< audio wav="/audio/paperwav/838_20_stft.wav" >}}|
|BIM |Country          |24.58 |{{< audio wav="/audio/paperwav/838_20_bim.wav" >}} |
|FGSM|Hiphop           |18.35 |{{< audio wav="/audio/paperwav/838_20_fgsm.wav" >}}|

#### COUNTRY (Original file):

{{< audio wav="/audio/paperwav/778_8_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |                    AUDIO RECONSTRUCTED            |
|----|-----------------|------|---------------------------------------------------|
|None|Country          |129.81|{{< audio wav="/audio/paperwav/778_8_stft.wav" >}} |
|BIM |Pop              |25.05 |{{< audio wav="/audio/paperwav/778_8_bim.wav" >}}  |
|FGSM|Pop              |18.09 |{{< audio wav="/audio/paperwav/778_8_fgsm.wav" >}} |


#### BLUES (Original file):

{{< audio wav="/audio/paperwav/891_21_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |             AUDIO RECONSTRUCTED            |
|----|----------|------|---------------------------------------------------|
|None|Blues     |102.62|{{< audio wav="/audio/paperwav/891_21_stft.wav" >}}|
|BIM |Rock      |24.91 |{{< audio wav="/audio/paperwav/891_21_bim.wav" >}} |
|FGSM|Rock      |19.26 |{{< audio wav="/audio/paperwav/891_21_fgsm.wav" >}}|


#### CLASSICAL (Original file):

{{< audio wav="/audio/paperwav/830_10_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |             AUDIO RECONSTRUCTED            |
|----|----------|------|---------------------------------------------------|
|None|Classical |103.00|{{< audio wav="/audio/paperwav/830_10_stft.wav" >}}|
|BIM |Jazz      |20.21 |{{< audio wav="/audio/paperwav/830_10_bim.wav" >}} |
|FGSM|Jazz      |14.12 |{{< audio wav="/audio/paperwav/830_10_fgsm.wav" >}}|

#### HIPHOP (Original file):

{{< audio wav="/audio/paperwav/970_16_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |             AUDIO RECONSTRUCTED            |
|----|----------|------|---------------------------------------------------|
|None|Hiphop    |120.16|{{< audio wav="/audio/paperwav/970_16_stft.wav" >}}|
|BIM |Pop       |19.78 |{{< audio wav="/audio/paperwav/970_16_bim.wav" >}} |
|FGSM|Pop       |12.89 |{{< audio wav="/audio/paperwav/970_16_fgsm.wav" >}}|


#### POP (Original file):

{{< audio wav="/audio/paperwav/696_20_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |             AUDIO RECONSTRUCTED            |
|----|----------|------|---------------------------------------------------|
|None|Pop       |120.78|{{< audio wav="/audio/paperwav/696_20_stft.wav" >}}|
|BIM |Reggae    |20.45 |{{< audio wav="/audio/paperwav/696_20_bim.wav" >}} |
|FGSM|Reggae    |13.78 |{{< audio wav="/audio/paperwav/696_20_fgsm.wav" >}}|


#### DISCO (Original file):

{{< audio wav="/audio/paperwav/930_17_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |             AUDIO RECONSTRUCTED            |
|----|----------|------|---------------------------------------------------|
|None|Disco     |116.34|{{< audio wav="/audio/paperwav/930_17_stft.wav" >}}|
|BIM |Rock      |24.37 |{{< audio wav="/audio/paperwav/930_17_bim.wav" >}} |
|FGSM|Hiphop    |17.81 |{{< audio wav="/audio/paperwav/930_17_fgsm.wav" >}}|


#### JAZZ (Original file):

{{< audio wav="/audio/paperwav/754_19_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |             AUDIO RECONSTRUCTED            |
|----|----------|------|---------------------------------------------------|
|None|Jazz      |126.77|{{< audio wav="/audio/paperwav/754_19_stft.wav" >}}|
|BIM |Classical |22.52 |{{< audio wav="/audio/paperwav/754_19_bim.wav" >}} |
|FGSM|Classical |16.13 |{{< audio wav="/audio/paperwav/754_19_fgsm.wav" >}}|


#### REGGAE (Original file):

{{< audio wav="/audio/paperwav/941_16_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |             AUDIO RECONSTRUCTED            |
|----|----------|------|---------------------------------------------------|
|None|Reggae    |128.13|{{< audio wav="/audio/paperwav/941_16_stft.wav" >}}|
|BIM |Pop       |18.65 |{{< audio wav="/audio/paperwav/941_16_bim.wav" >}} |
|FGSM|Hiphop    |12.37 |{{< audio wav="/audio/paperwav/941_16_fgsm.wav" >}}|


#### METAL (Original file):

{{< audio wav="/audio/paperwav/667_11_original.wav" >}}

|    |2D CNN PREDICTION|  SNR |             AUDIO RECONSTRUCTED            |
|----|----------|------|---------------------------------------------------|
|None|Metal     |108.13|{{< audio wav="/audio/paperwav/667_11_stft.wav" >}}|
|BIM |Pop       |25.57 |{{< audio wav="/audio/paperwav/667_11_bim.wav" >}} |
|FGSM|Pop       |16.60 |{{< audio wav="/audio/paperwav/667_11_fgsm.wav" >}}|










