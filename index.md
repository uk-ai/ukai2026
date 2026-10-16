---
layout: home
title: Index
---

<div class="photo-carousel" id="photo-carousel">
  <img id="photo-carousel-image" src="{{ 'assets/images/lanyards.jpg' | relative_url }}" alt="UK AI conference badges and lanyards">
  <button type="button" class="photo-carousel-arrow photo-carousel-prev" id="photo-carousel-prev" aria-label="Previous photo">&#8249;</button>
  <button type="button" class="photo-carousel-arrow photo-carousel-next" id="photo-carousel-next" aria-label="Next photo">&#8250;</button>
</div>
<script type="application/json" id="photo-carousel-data">
[
  {"src": "{{ 'assets/images/lanyards.jpg' | relative_url }}", "alt": "UK AI conference badges and lanyards"},
  {"src": "{{ 'assets/images/audience-1.jpg' | relative_url }}", "alt": "Audience seated during a talk, with one person speaking into a microphone"},
  {"src": "{{ 'assets/images/audience-2-web.jpg' | relative_url }}", "alt": "Wide view of the audience during a talk at the Hilton Nottingham"},
  {"src": "{{ 'assets/images/poster-session.jpg' | relative_url }}", "alt": "People talking beside research posters"},
  {"src": "{{ 'assets/images/somabotics-panel.jpg' | relative_url }}", "alt": "Somabotics panel seated in front of a slide titled Towards Expressive and Embodied Interactions with AI"}
]
</script>
<script src="{{ 'assets/js/photo-carousel.js' | relative_url }}"></script>

# Programme

The conference ran **Tuesday 29 - Wednesday 30 September 2026**. The full programme is on the **[Programme page]({{ "program.html" | relative_url }})**, with day-by-day schedules:

* [Day 1 - Tuesday 29 September]({{ 'day-1.html' | relative_url }})
* [Day 2 - Wednesday 30 September]({{ 'day-2.html' | relative_url }})

Talk and poster details are on each session page (including poster board numbers).

## Evening screening - AI LENS

On **Tuesday 29 September, 19:00–21:00**, the Somabotics Turing AI Fellowship held **[AI LENS: Stories from the Latent Space](https://www.eventbrite.com/e/ai-lens-stories-from-the-latent-space-tickets-1997139756774){:target="_blank"}** at Broadway Cinema, Nottingham. This was a free screening of three short films created with AI LENS, followed by a short panel. It was open to conference delegates and the public.

# Venue

The conference was hosted in {{ site.data.conference.location }}, from <b>{{ site.data.conference.dates[0] | date: "%A, %-d %B %Y" }} to {{ site.data.conference.dates.last | date: "%A, %-d %B %Y" }}</b> at {% if site.data.conference.venue_url %}<a href="{{ site.data.conference.venue_url }}" target="_blank">{% endif %}{{ site.data.conference.venue }}</a>. Further details about the venue and travel are on the **[Venue page]({{ "venue.html" | relative_url }})**.

# Organizing Committee

{%if site.author.email %}General inquiries should be sent to [{{ site.author.email }}](mailto:{{ site.author.email }}).{%endif%}

{% include listallchairs.html program_committee=true %}

# Sponsors

<a href="https://www.somabotics.ac.uk/" target="_blank"><img src="./assets/images/somabotics-logo-black-greyongrad.png" alt="SOMABOTICS" style="width: 30%; max-width: 200px;"></a>

This conference was supported by the Engineering and Physical Sciences Research Council (EPSRC) through the Turing AI World Leading Researcher Fellowship: Somabotics: Creatively Embodying Artificial Intelligence [grant number EP/Z534808/1]
