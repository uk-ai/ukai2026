---
layout: home
title: Index
---

# Programme

The detailed programme for the UK AI Conference 2026 will be announced closer to the conference dates.

<!--
A full programme for the conference can be found [here](https://uk-ai.org/ukai2026/program.html).
-->

# Venue

The conference will be hosted in {{ site.data.conference.location }}, from <b>{{ site.data.conference.dates[0] | date: "%A, %-d %B %Y" }} to {{ site.data.conference.dates.last | date: "%A, %-d %B %Y" }}</b> at {% if site.data.conference.venue_url %}<a href="{{ site.data.conference.venue_url }}" target="_blank">{% endif %}{{ site.data.conference.venue }}</a>. Further details about the exact venue and travel information can be found on the **[Venue page]({{ "venue.html" | relative_url }})**.

# Registration

Registration details (including link and deadlines) will be announced in due course.

<!--
Previous conference registration information:
To register for the conference, please use this link: **[Registration](https://www.eventbrite.co.uk/e/uk-ai-conference-2025-tickets-1323452765849){:target="_blank"}**
Registration closed on the 6th of June 2025.
-->

# Abstract Submission

Please see the **[Call for Papers]({{ "call-for-papers.html" | relative_url }})** for the current submission guidelines.

Details of the submission portal will be announced shortly.

For questions and queries please contact our team: [meeting@uk-ai.org](mailto:meeting@uk-ai.org)

# Key Dates

{% include listdates.html %}

# Organizing Committee

{%if site.author.email %}General inquiries should be sent to [{{ site.author.email }}](mailto:{{ site.author.email }}).{%endif%}

{% include listallchairs.html program_committee=true %}

# Sponsors

<a href="https://www.somabotics.ac.uk/" target="_blank"><img src="./assets/images/somabotics-logo-black-greyongrad.png" alt="SOMABOTICS" style="width: 30%; max-width: 200px;"></a>

This work is being supported by the Engineering and Physical Sciences Research Council (EPSRC) through the Turing AI World Leading Researcher Fellowship: Somabotics: Creatively Embodying Artificial Intelligence [grant number EP/Z534808/1]
