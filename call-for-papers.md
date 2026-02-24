---
layout: page
title: Call for Papers
---

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}{% assign nowunix = nowunix | plus: 0%}
{% capture conftime %}{{ site.data.conference.dates.last | date: '%s'}}{% endcapture %}{% assign conftime = conftime | plus: 0%}

<p>The UK AI Community is pleased to announce the {{ site.data.conference.instance }} {{ site.data.conference.styling }} {{site.data.conference.full_name }}, {% if conftime > nowunix %} which will be held{% else %}, which was held{% endif %} in {{ site.data.conference.location }}, from <b>{{ site.data.conference.dates[0] | date: "%A, %-d %B %Y" }} to {{ site.data.conference.dates.last | date: "%A, %-d %B %Y" }}</b> at {% if site.data.conference.venue_url %}<a href="{{ site.data.conference.venue_url }}" target="_blank">{% endif %}{{ site.data.conference.venue }}. We are delighted to continue bringing together researchers from across the UK to advance the national research on Artificial Intelligence. The conference will feature full-paper talks and poster presentations. This year, we invite two types of submissions:</p>

**Full Papers**: for researchers wishing to give a talk and have their work published in the Proceedings of Machine Learning Research (PMLR) as part of the conference proceedings.

**Abstracts**: for poster presentations at the conference.

This event will allow researchers nationwide to share work on all aspects of AI, from theory and development to application and real-world implementation. Topics include, but are not limited to:

- Machine Learning Theory
- Large Language Models
- Generative AI
- AI and Society
- Ethics and Trustworthy AI
- Human–Computer Interaction
- Natural Language Processing
- Computer Vision
- Robotics
- Privacy-preserving Machine Learning
- AI for Healthcare
- AI for Natural and Environmental Sciences
- Smart Cities
- Digital Twins
- AI Systems

A link to the submission portal will be provided shortly.

### Submission Guidelines

- **Full papers (for talks)** must be no more than 8 pages in length (excluding references) and follow the [UK AI Conference style](https://github.com/uk-ai/ukai-latex-template). Authors can use appendices to provide more details.
- **Abstracts (for posters)** must not exceed 300 words.

### Reciprocal Reviewing Requirement

Submissions of full papers must nominate one author to assist with the peer review of submitted works. Nominated reviewers will be asked to review up to three papers.

### Important Dates

{% include listdates.html %}

We look forward to receiving your submissions and welcoming you to the conference.

### Sponsorship

If your organisation would like to sponsor the conference, please contact [meeting@uk-ai.org](meeting@uk-ai.org). We welcome contributions of any amount.
