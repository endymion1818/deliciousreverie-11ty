---
layout: layouts/post.njk
title: "Moar Serverless 2022: Serverless as a Competitive Advantage for your Business"
description: "I gave a talk at Moar Serverless Conf 2022. If you’re still wondering what Serverless is, or if you’ve got friends and colleagues who are asking you, this talk will highlight some of the benefits."
date: "2022-08-21T12:21:21+01:00"
categories:
- serverless
- webiny
- talks
---
This week I gave a talk at Moar Serverless Conf 2022. The subject was aimed at helping people who are reticent about serverless, or who love it but struggle to convince other people to try it.

Here's the full video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/S3fqGuzpgMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The 4 benefits I talked about are

- No server management
- Inherent automatic scaling
- Consumption based pricing
- Faster product iteration

## No Server Management

I had an error at a place I worked at that stopped all of our applications from deploying, and which took around a week for four people to resolve. It was that the containers were running on Ubuntu 16, which became unsupported by the infrastructure.

If we had used Serverless, the problem would have been minimised because we don't care what OS the application is running on. So we can be more flexible about dependency upgrades.

## Automatic scaling

I talked about how organisations will usually have around 2 replicasets of their application running continuously, and have autoscaling to maybe 4. But that traffic spikes could easily go beyond this, leading to `Error 429` messages.

In a serverless environment, you just watch the numbers roll up, knowing that your infrastructure will scale to the amount of requests.

## Consumption based pricing

I had two numbers on the screen: $2,000 and $0.86. The first figure is what I guessed one company I worked was paying for one of it's applications in one environment every month. They had 4 environments, and 13 applications, and so the monthly cost would be huge.

In contrast, I shared that I got my first AWS bill last month and it was $0.86. This is after 2 years of use.

I admitted that it wasn't a fair comparison; I mostly have small blogs which don't get a lot of requests, but I was just amazed at the difference in costs.

## Faster product iteration

I said that because developers don't have to worry about _every_ part of the stack, they can focus on business deliverables. That means the business can go faster and beat the competition to market, instead of being late to the party.

I concluded by saying Serverless isn't a rose garden. Serverless infrastructure requires that the application is specifically built for such an environment. This makes adopting serverless extremely difficult for existing solutions that just want to change their underlying infrastructure.

So developers need to start with serverless, not try to adopt it later.

One way of getting started with Serverless quickly is to take an existing open source application and deploy it. That allows you to see the potential and how certain problems have already been solved.

I advised that developers take Webiny for a spin, because it has all of the benefits of Serverless without the cost of building something yourself.

It was great to speak at an event with so many other good people I know and respect.

I'm looking for more opportunities to speak at events in the near future!
