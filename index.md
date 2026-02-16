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

The conference will be hosted in <!--{{ site.data.conference.venue }},-->{{ site.data.conference.location }}, from <b>{{ site.data.conference.dates[0] | date: "%A, %-d %B %Y" }} to {{ site.data.conference.dates.last | date: "%A, %-d %B %Y" }}</b> at {% if site.data.conference.venue_url %}<a href="{{ site.data.conference.venue_url }}" target="_blank">{% endif %}{{ site.data.conference.venue }}. Further details about the exact venue and travel information will be provided on the **[Venue page]({{ "venue.html" | relative_url }})** when confirmed.

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

For questions and queries please contact Christian Cabrera: [meeting@uk-ai.org](mailto:meeting@uk-ai.org)

# Key Dates

{% include listdates.html %}

# Organizing Committee

{%if site.author.email %}General inquiries should be sent to [{{ site.author.email }}](mailto:{{ site.author.email }}).{%endif%}

{% include listallchairs.html program_committee=true %}

# Sponsors

<!--
<a href="https://www.hdruk.ac.uk/" target="_blank"><img src="./assets/images/hdruk_logo.png" alt="HDR UK" style="width: 30%; max-width: 200px;"></a>
-->
