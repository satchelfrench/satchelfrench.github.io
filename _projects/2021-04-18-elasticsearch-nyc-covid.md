---
title: "Analyzing NYC 311 Calls with ElasticSearch"
tags: ["data", "elasticsearch", "introduction"]
author: "Satchel French"
comments: true
layout: project
---

---
<br>

Big Data is becoming a huge part of the modern world, and the ability to quickly sift through it and discover insights is becoming more and more valuable. [ElasticSearch](https://www.elastic.co) NoSQL document store used for creating and anylzing scalable, searchable, data warehouses. It is used by the likes of Wikipedia, Netflix, Uber, and many more of todays largest tech companies.

Today I'll just be playing around with it, setting up a google cloud serrver and running some queries. In a future post I may show how to create a visualization board in Kibana.

⚠️ <span style="color:orange">*Warning: This is not intended to be an in-depth tutorial for an absolute beginner. It is however an example of <u>working with the garage door open</u> and I think novices may still find value in it.*</span>

<br>
### Setup and Start

First of all you'll need to get the ELK stack up and running (ElasticSearch, Logstash, Kibana). Here are some great resources for getting started witht he basics:
- [Configuration Tutorial](https://github.com/tofighi/tutorials/tree/master/elk2)
- [Setting Up a Logstash Pipeline Configuration File](https://www.elastic.co/guide/en/logstash/current/configuration-file-structure.html)
- [Download the Dataset](https://www.kaggle.com/pablomonleon/311-service-requests-nyc)


<br>
### Making some Queries

ElasticSearch is different from SQL based analysis in that it makes all of its requests in JSON. Personally I learn best by example, so I've listed some desired queries and their corresponding ElasticSearch JSON.

<br>
#### Question 1
*"Display **count** of all the documents in the nyc311calls index"*

```json
GET /nyc311calls/_count
```

<br>
#### Question 2
*"Display **count** of all calls with the word **"heat" in descriptor** in the nyc311calls index"*

```json 
GET /nyc311calls/calls/_count
{
  "query": {
      "match": { "Descriptor": "heat"}
  }
}
```

<br>
#### Question 3
*"Write an **aggregation** to show the top 10 cities with the highest number of calls"*

```json 
GET /nyc311calls/calls/_search
{
  "size":0,
  "aggs": {
    "group_by_city": {
      "terms": {
        "field": "City.keyword",
        "size": 10
      }
    }
  }
}
```

- **Notes**:
  - *Size defaults to 10*
  - [Documentation for from/size](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/search-request-from-size.html)
  - [Documentation for term size](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html)

<br>
#### Question 4
*"Write a query to see the status of all cases ina given borough."*

```json 
GET /nyc311calls/calls/_search
{
  "query":{
    "match":{
      "City": "BROOKLYN"
    }
  },
  "size":0,
  "aggs": {
    "group_by_status": {
      "terms": {
        "field": "Status.keyword"
        }
      }
    }
  }
}
```
