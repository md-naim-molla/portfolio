---
title: "RAG Based Medical Chatbot"
description: "Built and deployed a RAG-based Medical Assistant Chatbot using Flask, Gemini API, and Pinecone, delivering context-aware responses from a custom medical knowledge base."
external_url: "https://github.com/md-naim-molla/Medical-Chatbot"
---

## Project Overview

A Retrieval-Augmented Generation (RAG) medical assistant chatbot designed to provide context-aware, reliable health information by retrieving relevant knowledge from curated medical literature and passing it to large language models.

## Key Features

- **Knowledge Retrieval Pipeline**: Chunked and vectorized medical reference documents into high-dimensional vector embeddings using LangChain and HuggingFace models.
- **Vector Database**: Stored and indexed embeddings with Pinecone for fast, scalable nearest-neighbor semantic search.
- **Context-Augmented Generation**: Integrated Google Gemini API to formulate accurate, grounded answers based solely on retrieved domain context.
- **Web Interface**: Built an interactive, user-friendly chat interface using Flask and responsive frontend design.

## Tech Stack

- **LLM & Embeddings**: Google Gemini API, HuggingFace Embeddings, LangChain
- **Vector Store**: Pinecone
- **Backend & Web**: Python, Flask, HTML/CSS, JavaScript