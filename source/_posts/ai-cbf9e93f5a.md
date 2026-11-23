---
title: "亚马逊云科技推出 TorchNeuron，可以直接在 AWS Trainium 上运行 PyTorch 模型，无需任何修改"
date: 2026-11-23 10:04:40
categories:
  - AI 新闻
  - InfoQ 中文
tags:
  - AI
  - InfoQ 中文
excerpt: "在最近举行的 2026 年 PyTorch 北美大会(https://pytorch.org/event/pytorch-conference-2026/)上，亚马逊云科技推出了 TorchNeuro"
source_url: "https://www.infoq.cn/article/XhtWUmaolJECUhPX2jzY?utm_source=rss&utm_medium=article"
---
> 来源：InfoQ 中文　|　原发布：2026-11-22　|　采集：2026-11-23 10:04:40

## 正文

在最近举行的 2026 年 [PyTorch 北美大会](https://pytorch.org/event/pytorch-conference-2026/)上，亚马逊云科技推出了 [TorchNeuron](https://github.com/aws-neuron/torch-neuronx)——这是一个原生 PyTorch 后端，可以让开发者在几乎无需修改代码的情况下，在 [AWS Trainium AI](https://aws.amazon.com/ai/machine-learning/trainium/) 芯片上运行现有的 PyTorch 代码。

除了减少工程工作量外，TorchNeuron 还允许企业在训练和推理工作负载之间共享硬件容量，并在非高峰时段将资源从推理任务重新分配到训练任务。

亚马逊云科技表示，[只需要进行一次配置更改即可切换硬件](https://www.aboutamazon.com/news/innovation-at-amazon/torchneuron-pytorch-aws-trainium-chips-ai)，在迁移至 Trainium 时不需要重写和重新验证模型。

> 如今，85% 的人工智能研究人员和开发者都在使用 PyTorch 编写代码。此前，能够运行这些代码的硬件远比代码本身的限制要多，要扩展到新的芯片，就意味着需要重写并重新验证那些耗时数月才臻于完美的代码。

根据 [TorchNeuron 的文档](https://awsdocs-neuron.readthedocs-hosted.com/en/latest/torch/index.html)，当通过 torch.accelerator 利用 PyTorch 的自动设备检测功能时，唯一需要做出的改动就是将 .to(‘cuda’) 替换为 .to(‘neuron’)。该后端还原生支持分布式训练和 PyTorch 并行 API，包括 DDP、FSDP2、DTensor 等。此外，TorchNeuron 还通过 torch\_neuronx.Stream 和 torch\_neuronx.Event 为 Torch 流和事件提供原生支持。

Amazon Annapurna Labs 副总裁 Colin Brace ——他领导着 TorchNeuron 开发团队——强调，为了确保开发者在采用新后端时能够获得流畅的开发体验，他的团队[对 10 万个最受欢迎的模型和 800 多种机器学习架构进行了验证](https://lnkd.in/p/ev2BSv2J)。

此外，TorchNeuron 还允许开发者和研究人员使用 [Neuron 内核接口](https://awsdocs-neuron.readthedocs-hosted.com/en/latest/nki/index.html)（NKI）来开发、优化和执行自定义运算符：

> 开发者可以通过在模型代码中直接调用对性能至关重要的 NKI 内核，来替代一系列标准的 PyTorch 操作（ATen 操作），从而获得比自适应即时执行（Adaptive Eager）和 torch.compile 更精细的性能控制。

针对亚马逊云科技在 LinkedIn 上的公告，Liner Notes Consulting 首席执行官 [Yasuo Maeda 指出](https://lnkd.in/p/embbfUmx)：

> 真正的考验在于开发者能否在生产环境中实现具有竞争力的性能和总拥有成本。AI 基础设施的竞争不仅在于谁能制造出最好的芯片，还在于谁能让这些芯片在规模化应用时更易于使用。

同样，用户 Pratham pratham 也强调，虽然降低迁移门槛对于避免加速器锁定至关重要，但[真正的考验在于针对特定工作负载的性能、每 token 成本以及可重复性](https://lnkd.in/p/e3RbJ-bZ)。

亚马逊云科技还强调，TorchNeuron 已经被多家机构采用，其中包括将该技术用于语音 AI 推理的 Cartesia，以及探索其在药物靶点识别和药物发现领域应用的利伯脑发育研究所。

亚马逊云科技发布 TorchNeuron 的消息紧随[谷歌推出 TorchTPU](https://www.infoq.com/news/2026/11/torchtpu-native-pythorch-tpu/) 之后——TorchTPU 是谷歌为其 TPU 硬件开发的原生 PyTorch 后端。

声明：本文为 InfoQ 翻译，未经许可禁止转载。

原文链接：[https://www.infoq.com/news/2026/11/aws-torchneuron-trainium-pytorch/](https://www.infoq.com/news/2026/11/aws-torchneuron-trainium-pytorch/)


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ 中文（https://www.infoq.cn/article/XhtWUmaolJECUhPX2jzY?utm_source=rss&utm_medium=article）。