---
layout: home
title: Index
---

# Registration

{% include registration.html %}

## Key Dates

{% include listdates.html %}

# Camera-ready (accepted full papers)

{% include camera_ready_instructions.html %}

Background on topics and format is on the **[Call for Papers]({{ "call-for-papers.html" | relative_url }})** page (submissions are now closed).

# Programme

A draft programme for the conference is available on the **[Programme page]({{ "program.html" | relative_url }})**.

## Evening screening - AI LENS

On **Tuesday 29 September, 19:00–21:00**, join the Somabotics Turing AI Fellowship for **[AI LENS: Stories from the Latent Space](https://www.eventbrite.com/e/ai-lens-stories-from-the-latent-space-tickets-1997139756774){:target="_blank"}** at Broadway Cinema, Nottingham. This is a free screening of three short films created with AI LENS, followed by a short panel. Open to conference delegates and the public. **Booking is required** via Eventbrite.

# Venue

The conference will be hosted in {{ site.data.conference.location }}, from <b>{{ site.data.conference.dates[0] | date: "%A, %-d %B %Y" }} to {{ site.data.conference.dates.last | date: "%A, %-d %B %Y" }}</b> at {% if site.data.conference.venue_url %}<a href="{{ site.data.conference.venue_url }}" target="_blank">{% endif %}{{ site.data.conference.venue }}</a>. Further details about the exact venue and travel information can be found on the **[Venue page]({{ "venue.html" | relative_url }})**.

# Organizing Committee

{%if site.author.email %}General inquiries should be sent to [{{ site.author.email }}](mailto:{{ site.author.email }}).{%endif%}

{% include listallchairs.html program_committee=true %}

# Sponsors

<a href="https://www.somabotics.ac.uk/" target="_blank"><img src="./assets/images/somabotics-logo-black-greyongrad.png" alt="SOMABOTICS" style="width: 30%; max-width: 200px;"></a>

This work is being supported by the Engineering and Physical Sciences Research Council (EPSRC) through the Turing AI World Leading Researcher Fellowship: Somabotics: Creatively Embodying Artificial Intelligence [grant number EP/Z534808/1]
