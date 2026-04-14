 // ── Scroll reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ── Navbar shadow on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    // ── Smooth scroll helper
    function scrollTo(selector) {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // ── Mobile hamburger
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    function closeMobile() {
      mobileMenu.classList.remove('open');
    }

    // ── Smooth scroll for all # links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        closeMobile();
      });
    });

    // ── Animate progress bars when visible
    const progFills = document.querySelectorAll('.prog-fill');
    const progObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.style.width;
          fill.style.width = '0';
          setTimeout(() => { fill.style.width = width; }, 100);
          progObserver.unobserve(fill);
        }
      });
    }, { threshold: 0.5 });
    progFills.forEach(f => progObserver.observe(f));

    
    document.addEventListener("DOMContentLoaded", () => {

  const messages = document.getElementById("messages");
  const input = document.getElementById("userInput");

  // ALL your code here

});
function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = "msg " + sender;
    msg.innerText = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

// ✅ BOT LOGIC (BRIEF + SMART)
function getBotReply(text) {
    text = text.toLowerCase();

   if (text.includes("hello") || text.includes("hi"))
    return `🧠 Insight:
Hello! I’m your Smart Assistant, designed to support you with meaningful guidance across different areas of life.

⚖️ Support:
Whether it’s health, studies, emotions, or decisions, I aim to provide balanced and thoughtful responses.

🌱 Value:
Clear communication helps in better understanding and decision-making.

✨ Thought:
Feel free to ask anything. Every question is a step toward clarity and growth.`;

if (text.includes("fever"))
    return `🧠 Insight:
Fever is usually a natural response of the body fighting infection, indicating that your immune system is active.

⚖️ Advice:
Ensure proper rest, drink plenty of fluids, and take basic medication like paracetamol if required.

🌱 Care:
Avoid cold foods and monitor your temperature regularly.

✨ Note:
If the fever is very high, lasts more than a few days, or is accompanied by other symptoms, consult a doctor immediately.`;

if (text.includes("study"))
    return `🧠 Insight:
Effective studying is about quality and consistency rather than spending long hours without focus.

⚖️ Strategy:
Use techniques like the Pomodoro method (25 minutes study + 5 minutes break) to improve concentration.

🌱 Tip:
Revise regularly and practice active recall to strengthen memory.

✨ Thought:
Small, consistent efforts every day lead to strong academic success over time.`;

if (text.includes("stress"))
    return `🧠 Insight:
Stress often occurs when mental or emotional pressure becomes difficult to manage, affecting focus and well-being.

⚖️ Advice:
Take short breaks, practice deep breathing, and organize your tasks to reduce overload.

🌱 Care:
Engage in activities like walking, music, or meditation to calm your mind.

✨ Thought:
A relaxed and balanced mind helps you think clearly and make better decisions in challenging situations.`;

if (text.includes("life"))
    return `🧠 Insight:
Life is shaped by the decisions you make and the values you choose to follow consistently.

⚖️ Ethics:
Making decisions based on integrity and long-term thinking brings peace and stability.

🌱 Growth:
Focus on learning, patience, and self-improvement instead of comparing with others.

✨ Reflection:
Success is not instant; it is built gradually through discipline, effort, and the right mindset.`;

if (text.includes("god") || text.includes("faith"))
    return `🧠 Insight:
Faith provides inner strength, hope, and emotional stability, especially during difficult or uncertain times.

⚖️ Balance:
While trusting in God, it is equally important to take practical actions and responsibilities in life.

🌱 Guidance:
Stay positive, pray or reflect regularly, and keep your mindset strong.

✨ Reflection:
Faith combined with consistent effort creates powerful outcomes and leads to true peace.`;

if (text.includes("sad"))
    return `🧠 Insight:
Feeling sad is a natural human emotion that everyone experiences at different stages of life.

⚖️ Support:
It is important to acknowledge your feelings instead of ignoring them and talk to someone you trust.

🌱 Healing:
Engage in activities that bring comfort and allow yourself time to recover emotionally.

✨ Thought:
Difficult moments are temporary and often help you grow stronger and more resilient.`;

return `🧠 Insight:
I am continuously learning to provide better guidance.

⚖️ Suggestion:
You can ask about health, life, studies, or daily challenges.

🌱 Value:
Every question helps improve understanding.

✨ Thought:
Keep asking, keep learning, and keep growing 🌱`;

    return "🤖 I'm learning. Ask about health, life, or study.";
}

// ✅ SEND MESSAGE
function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
        addMessage(getBotReply(text), "bot");
    }, 500);
}

// ✅ ENTER KEY
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});