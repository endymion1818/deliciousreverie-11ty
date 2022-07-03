---
layout: layouts/post.njk
categories:
  - personal
  - development
date: "2022-07-01T10:21:21+01:00"
description: "Do you describe yourself as a web developer or software engineer? There's no general consensus about what those terms mean, however my understanding has recently shifted."
draft: false
tags:
  - career development
  - personal goals
title: "Am I a software engineer or a web developer?"
---
**Do you describe yourself as a web developer or software engineer? There's no general consensus about what those terms mean, but how I think about them has recently shifted.**

In some places in the world, there's a clear understanding that you have to have a college degree, usually in computer science, in order to get a job as a software engineer. In the UK where I live, things are more flexible. I'm personally happy about that, I don't think that a qualification always means you can do the work involved, and that it could easily exclude people who are otherwise qualified from doing work they could be entitled (not to mention able) to perform.

However, there are consequences to that. When are you a software engineer, and when are you a web developer?

Around 4 years ago, "Software engineer" worked its way into my job title. I had previously been building websites, but I always called myself a web developer before that. Why? Mostly because I was building for the most part using HTML and CSS. JavaScript only came into the equation occasionally, although consequently that meant I'd often have a server-side language like PHP to work with as well.

I decided that because I was working more exclusively with JavaScript, and working for an organisation that was more corporate in nature, the job title was more suited to what I was doing.

But my thinking on this matter has recently changed.

## Tools of the trade

Recently talking to Pavel, our CTO about this, I learned his definition:

A web developer builds things like websites, CRUD apps and the like. They use the tools they're provided to create something to fulfil a business need. A software engineer's role on the other hand, revolves more around the implementation of the _tools_ and how other developers use those tools.

For example, although developers might work with a monorepo, who maintains that monorepo? what about the pipelines? If developers are building new applications using a framework, who makes sure the framework has the right level of composition so things can be changed sufficiently for each new project? Who ensures the right lifecycle methods are exposed to ensure they can hook into it at different times?

Now I'm working at this level, or at least trying to, Ive seen a huge difference in the ways of thinking about, and writing code.

I also watched a [Clean Coder](https://cleancoder.com/products) video, where Bob Martin stipulates that writing code is only the first 50% of our job. Once we've written code, we need to ensure it's efficient and readable, so the next person coming into the project can modify it without having to jump through too many mental hoops in order to understand what we've written.

In my previous roles, there was a lot more pressure on delivering, which meant sacrificing quality to meet business objectives. This of course led to a messy codebase that slowed down development teams to a crawl.

In my current role, providing clean code is _everything_. Individuals and teams are going to pick up Webiny and create something unique with it. We need to ensure that's as easy as possible for them to do so.

But of course, we don't know what they're going to be building, or what they might want to change. I've been able to peek behind the curtain to see what some of those requirements are, and it's been a eye opening experience.

I've been working to upgrade our UI library over the past weeks. When Pavel and I began to set out the requirements, we decided it should include the ability for teams to implement their own UI library should they choose. This meant we would write an abstraction layer and use that to connect that to our 3rd party UI library. Even though the scope was reduced because of prioritisation, it taught me the kind of level of thinking that's required here.

It's challenged me in a good way. I joked with Pavel that although I'd been working as a software engineer for years, this is my first software engineering role.

## Going forward

There's 2 things to gain for me here.

Firstly, I want to be able to think that way, and code that way. This will take quite a bit of effort because I'm coming into this way of thinking at 42 years of age, which does slow me down somewhat.

But as well as being a learning opportunity, it's also a teaching opportunity. There's so much that Webiny does that we can use to teach others. I think there's a lot of people who have the ability to learn this level of thinking and coding but need the resources to do so. We've noticed that in our hiring process: we've talked to loads of competent people who have not been exposed to this kind of software engineering thinking before.

Pavel and I are talking about a series of videos that will cover these concepts, so if you're interested, look out for them in the near future!
