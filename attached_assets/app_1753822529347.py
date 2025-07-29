import streamlit as st
from PIL import Image
import base64
import random
import time
import os
from streamlit.components.v1 import html

def image_to_base64(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")


# ---------- PAGE CONFIG ---------- #
st.set_page_config(page_title="Aryan Shah Portfolio", page_icon="💼", layout="centered")

st.markdown("""
    <style>
    .stButton > button {
        transition: all 0.2s ease;
        border-radius: 10px;
    }
    .stButton > button:hover {
        transform: scale(1.05);
        background-color: #f0f0f0;
    }
    .st-expanderHeader {
        transition: all 0.2s ease;
    }
    .st-expanderHeader:hover {
        background-color: #fafafa;
        transform: scale(1.01);
    }
    </style>
""", unsafe_allow_html=True)


st.markdown("""
    <style>
    .stApp {
        background-image: url("https://img.freepik.com/free-vector/abstract-black-lines-geometric-background_677411-2748.jpg");
        background-size: cover;
        background-attachment: fixed;
    }
    </style>
""", unsafe_allow_html=True)

st.markdown("""
    <style>
    html, body, [class*="st-"] {
        color: white !important;
    }
    .stApp {
        background-color: transparent;
    }
    </style>
""", unsafe_allow_html=True)

# ---------- BANNER + PROFILE ---------- #
banner = Image.open("assets/banner.png")
st.image(banner, use_container_width=True)

# ---------- HOME ---------- #
with st.expander("🏠 Home", expanded=True):
    st.title("Aryan Shah")
    st.markdown('<h3 style="font-size: 22px;">Computer Science Grad Student @ USC | ex-NLP Engineer at Elixir Equities</h3>', unsafe_allow_html=True)
    st.markdown("""Hi, I am a data scientist deeply passionate about artificial intelligence, large language models, neural networks, data analysis and statistical models.
                With a solid foundation from my Bachelor's in Data Science at NMIMS' MPSTME, a wealth of experience as an NLP Engineer,
                and a handful of personal projects, I've developed a strong interest in the idea of building AI or data-driven end to end intelligent
                systems. Currently, I'm pursuing my Master's in Computer Science at the University of Southern California. While my interest in AI is extensive,
                I also enjoy working on full-stack solutions, thrive in collaborative environments, and am always eager to explore and implement innovative ideas.""")
    st.markdown("[LinkedIn](https://www.linkedin.com/in/aryanshah1410/) | [GitHub](https://github.com/aryan1410)")

# ---------- AUTOMATED SLIDESHOW ---------- #
st.title("Featured")
st.markdown("""
<style>
.carousel-container {
    width: 100%;
    max-width: 720px;
    margin: 0 auto 2rem;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.carousel-slide {
    display: flex;
    width: 100%;
    animation: slide 40s linear infinite;
    height: 100%;
}
.carousel-slide div {
    flex: 1 0 100%;
    text-align: center;
    padding: 20px;
}
.carousel-slide img {
    width: 100%;
    height: 100%
    object-fit: cover;
    border-radius: 10px;
}
@keyframes slide {
    0% { transform: translateX(0%); }
    11.25% { transform: translateX(0%); }
    12.5% { transform: translateX(-100%); }
    23.75% { transform: translateX(-100%); }
    25% { transform: translateX(-200%); }
    36.25% { transform: translateX(-200%); }
    37.5% { transform: translateX(-300%); }
    48.75% { transform: translateX(-300%); }
    50% { transform: translateX(-400%); }
    61.25% { transform: translateX(-400%); }
    62.5% { transform: translateX(-500%); }
    73.75% { transform: translateX(-500%); }
    75% { transform: translateX(-600%); }
    86.25% { transform: translateX(-600%); }
    87.5% { transform: translateX(-700%); }
    98.75% { transform: translateX(-700%); }
    100% { transform: translateX(0%); }
}

</style>

<div class="carousel-container">
  <div class="carousel-slide">
    <div>
      <img src="https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/little_go.png">
      <h4>Game Playing Agents</h4>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/confusion.png">
      <h4>Confused Student Simulator</h4>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/expression_music.png">
      <h4>Emotion-Based Music Recommender</h4>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/pedestrian.png">
      <h4>Pedestrian Detection</h4>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/viterbi.png">
      <h4>Viterbi Temporal Reasoning</h4>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/memory.png">
      <h4>Sequence Alignment</h4>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/elixir.png">
      <h4>NLP Engineer @ Elixir</h4>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/USC-viterbi.png">
      <h4>Research Assistant @ USC</h4>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/aryan1410/portfolio/master/assets/organic.png">
      <h4>Business Analyst Intern</h4>
    </div>
  </div>
</div>
""", unsafe_allow_html=True)

# ---------- EDUCATION & SKILLS ---------- #
with st.expander("Education"):
    st.image("assets/usc.png", use_container_width=True)
    st.markdown('<h3 style="font-size: 18px;">MS in Computer Science<br>University of Southern California<br>(January 2025 - December 2026)</h3>', unsafe_allow_html=True)
    st.markdown("""Relevant Coursework:  
                Analysis of Algorithms (CSCI 570)  
                Foundations of Artificial Intelligence (CSCI 561)  
                Web Technologies (CSCI 571)""")
    st.image("assets/mpstme.png", use_container_width=True)
    st.markdown('<h3 style="font-size: 18px;"> BTech in Data Science<br>NMIMS Mukesh Patel School of Technology Management and Engineering<br>(August 2020 - July 2024)</h3>', unsafe_allow_html=True)
    st.markdown("""Relevant Coursework:  
                - Engineering Graphics and Design  
                - Programming for Problem Solving  
                - Data Structures and Algorithms  
                - Managing Uncertainty  
                - Optimization Methods  
                - Data Gathering and Cleaning (ETL)  
                - Principles of Economics and Management  
                - Data Handling and Visualization  
                - Information Security and Privacy  
                - Introduction to Data, Signal and Image Analysis  
                - Statistical Structures in Data and Inference  
                - Android App Development  
                - Database Management Systems  
                - Stochastic Processes and Applications  
                - Management Accounting for Engineers  
                - Professional Ethics  
                - Applied Artificial Intelligence  
                - Foundations of Machine Learning  
                - Elements of Project Management  
                - Internet of Things Analytics  
                - Introduction to Modern Application Development  
                - Supervisory Control and Data Acquisition  
                - Virtualization and Cloud Computing  
                - Advanced Data Structures for Analytics  
                - Applications of Machine Learning  
                - Computer Vision and Applications  
                - Research Methodology  
                - Supply Chain and Analytics  
                - Advanced Database Management Systems  
                - Big Data Analytics  
                - DevOps  
                - MLOps  
                - Neural Networks and Deep Learning  
                - Speech and Natural Language Processing  
                - Capstone Project  
                CGPA: 3.64""")

# ---------- EXPERIENCE ---------- #
with st.expander("Work Experience"):
    st.image("assets/USC-viterbi.png", width=200)
    st.markdown('<h3 style="font-size: 20px;">Graduate Research Assistant @ USC Viterbi, Los Angeles, California (Feb 2025 - May 2025)</h3>', unsafe_allow_html=True)
    st.markdown("""
    [Company Website](https://viterbischool.usc.edu/) 
    - Worked independently under a professor to leverage deep learning and computer vision to solve problems in the mental health domain.
    - Fine tuned multiple custom, and pre trained vision models, such as VGG, OpenFace, DeepFace, etc. to detect the level of focus on an individual's face.
    - Model was able to identify subtle features and expressions (such as steady gaze, blinking, pupil dilation, etc. ) and use them to classify as focused or not focused based on a threshold.
    - Best model accuracy 82%, f1-score 0.86""")
    st.image("assets/elixir.png", width=200)
    st.markdown('<h3 style="font-size: 20px;">NLP Engineer @ Elixir Equities, Mumbai, India (July 2024 - November 2024)</h3', unsafe_allow_html=True)
    st.markdown("""
    [Company Website](https://www.paisasmart.com/) 
    - Served in a team to create initial prototype of chatbot core engine via prompt engineering and leveraging Open AI's LLM.
    - Managed chatbot database operating MongoDB and SQL alike, deploying CI/CD pipelines and performed sentiment
    analysis models on 100 real time text messages from database, exposing servers via safe tunnels using ngrok.
    - Contextualized user query by maintaining conversation summaries and entities for every user in dedicated user profiles, and
    feeding LLM incremental summaries and entities for a new message in a user session for over 100 message conversations, using
    Langchain's buffer windows and custom trained entity extraction models.
    - Organized Postman flows to implement visual testing of chatbot API responses for 150 scenarios and operated field
    specific assertions to assert effectiveness of responses improving bug identification and resolution by over 100%.
    - Utilized LLM to optimize chat history summarizer for a user session via prompt engineering and string slicing techniques,
    optimizing summary length by 35%\ and boosting user engagement by personalized context preservation.
    - Built a synthetic dataset of product specific user journeys (over 5000 user messages) for evaluation of minimum viable
    product (MVP), fine tuning and training of custom LLMs tailored to chatbot, and saving 20%\ overall cost from OpenAI’s API calls.
    - Functioned as team lead for development of an automated end-to-end integration testing framework, which was benchmark
    for product launch, utilizing dataset by querying journey specific data to chatbot’s API, recording latency, fluency, accuracy, and
    relevance to ground truth responses via separate evaluation pipelines for deterministic and non deterministic LLM responses,
    while saving failure reports to AWS S3.
    """)
    # st.image("assets/elixir_letter.png", width=200)
    st.image("assets/elixir.png", width=200)
    st.markdown('<h3 style="font-size: 20px;">Data Science Intern @ Elixir Equities, Mumbai, India (January 2023 - June 2024)</h3', unsafe_allow_html=True)
    st.markdown("""
    - Led initiative to scrape over 10 years of bond yield data from CBIL Bond Index, RBI website. Pre-processed and cleaned it using
    data wrangling and mining techniques, and condensed frequencies of secondly data points to aggregate frequencies of
    monthly data points to accommodate a broader timeline, showcasing leadership, adaptability and problem-solving.
    - Performed exploratory data analysis to visualize and plot yield movements and its relationship with various
    independent variables such as benchmark index rates, inflation rates, etc. for communication about project significance.
    - Simulated mean reversion to predict rate of return and direction of Nifty 50 financial market index in Excel.
    - Developed and deployed consolidated dashboard on Indian debt market, following standard Agile SDLC and project management
    principles using plotly as frontend, Browse AI for automated data scraping from websites into csv files.
    """)

    st.image("assets/organic.png", width=200)
    st.markdown('<h3 style="font-size: 20px;">Business Analyst Intern @ The Organic Magazine (Remote) (August 2021 - November 2021)</h3', unsafe_allow_html=True)
    st.markdown("""
    [Company Website](https://theorganicmagazine.com/) 
    - Forming a network through various databases of corporates in and out of India in the organic field via research.
    - Analysis of the companies for business purposes and approaching them for features in the magazine on a regular basis.
    - Research on highly active CSR firms in India to approach for webinars in order to spread awareness about organic products.
    Work collaboratively with rest of the team members.
    - Pitching to various individuals or brands to bring in business and revenue for the company.
    """)
        # st.image("assets/organic_letter.png", width=200)

# ---------- PROJECTS ---------- #
with st.expander("Personal Projects"):
    st.markdown('<h3 style="font-size: 20px;">Little Go AI Agents</h3>', unsafe_allow_html=True)
    st.image("assets/little_go.png")
    st.markdown(""" This project builds intelligent agents to play a simplified 5x5 version of Go using
    a variety of AI techniques—minimax with alpha-beta pruning, greedy heuristics, and reinforcement
    learning. It includes self-play training, evaluation scripts, and multiple strategy agents to
    simulate intelligent gameplay  
    Applications:  
    - Strategy game AI development  
    - Reinforcement learning experimentation  
    - Decision-making simulations  
    - Educational tools for AI in games  
    For more information, visit the [GitHub repo](https://github.com/aryan1410/little_go).
    """)

    st.markdown('<h3 style="font-size: 20px;">Expression-Based Music System</h3>',unsafe_allow_html=True)
    st.image("assets/expression_music.png")  # Placeholder
    st.markdown("""This project detects a user's facial expression in real-time and recommends music that matches their emotional state.
    It uses a VGG19-based convolutional neural network trained on the FER2013 dataset to classify emotions into categories like happiness,
    sadness, anger, and more. Haar cascades are employed for quick face detection, while OpenCV handles video processing. The system
    dynamically updates music playback as the user's emotions change, using Pygame for smooth, non-blocking audio control. The model
    is fine-tuned using transfer learning, with the final layers adapted for emotion classification. Overall, the project demonstrates
    a seamless integration of computer vision, deep learning, and user-centric media interaction.  
    Applications:  
    - Emotion-aware music players  
    - Mental wellness tools  
    - Mood-based playlist generators  
    - Interactive entertainment systems  
    - Real-time adaptive media environments  
    For more information, visit the [GitHub repo](https://github.com/aryan1410/emotion_recognition).
    """)

    st.markdown('<h3 style="font-size: 20px;">Viterbi Temporal Reasoning</h3>',unsafe_allow_html=True)
    st.image("assets/viterbi.png")  # Placeholder
    st.markdown("""This project implements a Viterbi-based temporal reasoning agent to infer the most probable sequence of hidden states
    in a partially observable environment, specifically modeled around a “Little Prince” scenario. The agent processes structured input
    files defining state priors, transitions, and observations, then applies the Viterbi algorithm to decode the hidden state path
    from a sequence of observed actions and events. The architecture is modular and designed to allow easy modification and testing
    of different probabilistic models.  
    Applications:  
    - Decision-making under uncertainty  
    - Robot localization and path inference  
    - Natural language sequence decoding  
    - Medical diagnosis with hidden symptoms  
    - Predictive analytics in dynamic systems  
    For more information, visit the [GitHub repo](https://github.com/aryan1410/viterbi_temporal_reasoning).
    """)

    st.markdown('<h3 style="font-size: 20px;">Sequence Alignment Efficiency Analysis</h3>',unsafe_allow_html=True)
    st.image("assets/memory.png")  # Placeholder
    st.markdown("""This project solves the DNA sequence alignment problem using both a classic dynamic programming approach and a space-efficient variant.
    Given two base strings and duplication instructions, it recursively generates large DNA sequences and aligns them with minimal cost using
    gap and mismatch penalties. The basic version uses full memory for a complete DP table, while the efficient version applies divide-and-conquer
    strategies to reduce memory usage. The program outputs the alignment cost, aligned sequences, execution time, and memory footprint.  
    Applications:  
    - Genomic sequence comparison  
    - Evolutionary biology and phylogenetics  
    - DNA database search and indexing  
    - Bioinformatics algorithm optimization  
    - Protein or RNA structure alignment  
    For more information, visit the [GitHub repo](https://github.com/aryan1410/sequence_alignment_efficiency_analysis).
    """)

    st.markdown('<h3 style="font-size: 20px;">Pedestrian Detection</h3>',unsafe_allow_html=True)
    st.image("assets/pedestrian.png")  # Placeholder
    st.markdown("""This project implements a pedestrian detection system by combining deep learning models and classical computer vision techniques.
    Using transfer learning with VGG19, ResNet101, and InceptionV3, the system classifies pedestrians from video frames into "person"
    or "person-like" categories. Haar cascades and OpenCV are used to identify regions of interest in real-time video feeds, which are
    then analyzed by the fine-tuned models. The architecture ensures accurate, efficient detection and is capable of adapting to different
    model backbones with modular code support.  
    Applications:  
    - Autonomous vehicle pedestrian detection  
    - Public surveillance systems  
    - Smart city pedestrian monitoring  
    - Safety alert systems in transport and construction zones  
    - Crowd analytics and behavior analysis  
    For more information, visit the [GitHub repo](https://github.com/aryan1410/pedestrian_detection).
    """)
    
    st.markdown('<h3 style="font-size: 20px;">Confused Student Simulator</h3>',unsafe_allow_html=True)
    st.image("assets/confusion.png")
    st.markdown("""A conversational AI that mimics a confused yet intelligent student, generating naive or follow-up questions from lecture materials
    (text, PDFs, videos, YouTube links). It uses LLMs and ASR to simulate misunderstandings and engage users in a five-turn dialogue, helping
    identify gaps in clarity. Built with Gemini API, Whisper, and Streamlit, it supports multiple input formats and maintains conversational context.  
    Applications:  
    - Lecture debugging before delivery  
    - TA preparation and FAQ generation  
    - Self-study companion for learners  
    - Screening educational content for ambiguity  
    - Research on AI-simulated learning behavior  
    - Improving clarity in online courses and videos  
    For more information, visit the [GitHub repo](https://github.com/aryan1410/confused_student_simulator).
    """)

# ---------- VOLUNTEERING ---------- #
with st.expander("Volunteering & Leadership"):
    st.markdown("""
    - MUN Society MPSTME (2020-2022)  
    Senior Executive (2021-2022)  
    Led a team that researches on current affairs to create study guides for the large number of delegates that will take part in our events. Great way of gaining knowledge and be part of the organising committee of a large scale event.  
    Executive (2020-2021)  
    Worked for the Business development and marketing department. Used self created databases to pitch to various companies, start ups, businesses, etc. to sponsor our events in cash or in kind in return for publicity and exposure deliverables that we offered them. Great way of getting exposure to the corporate world  
      
    - Member, Rotaract Club (2020–2022)  
    Part of a team of driven people who work tirelessly for the cause "Act for Impact" and aim to give something back to the society through various events such as donation drives, letter distributions and much more.  
    - Executive, Music Committee  
    Responsible for raising funds for musical events. Performing in a band as a vocalist/guitarist taking part in inter college fests and intra college events.  
    - Performing Arts Executive, Sattva (Inter college cultural fest)  
    Part of a team that accumulated and hosted talent from all over the country to perform at our college's cultural festival Sattva.  
    - Event Head, Immaculata (High school cultural fest)  
    Led a group of volunteers and successfully pulled off an event in my school's annual cultural fest, Immaculata  
    """)

# ---------- CONTACT FORM REDIRECT ---------- #
with st.expander("Contact", expanded=False):
    st.markdown("Click the button below to open the contact form.")
    if st.button("Contact Me"):
        st.switch_page("pages/contact.py")