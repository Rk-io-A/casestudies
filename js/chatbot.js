const responses = {
  hello: "Hi! 👋 I'm Rajiv's portfolio assistant. Ask me about projects, tech stack, or how to hire.",
  hi: "Hello! How can I help you today?",
  project: "Rajiv has 5 full-stack projects: AI Job Portal, Food Delivery Platform, SaaS Analytics, Realtime Whiteboard, and AI Content Generator. Visit the Projects page for case studies.",
  projects: "Check the Projects page for detailed case studies of all 5 full-stack applications.",
  tech: "Tech stack includes Next.js, React, FastAPI, ASP.NET Core, TypeScript, PostgreSQL, WebSockets, JWT, Tailwind CSS, and AI integrations (OpenAI).",
  stack: "Frontend: Next.js + Tailwind. Backend: FastAPI / ASP.NET Core. Database: PostgreSQL / SQLite. Auth: JWT. Realtime: WebSockets. AI: OpenAI ready.",
  hire: "Great! Go to the Contact page or email rajivkapur@sirmint.com to start a conversation.",
  contact: "You can reach Rajiv via the Contact form on this site or email: rajivkapur@sirmint.com",
  price: "Project pricing depends on scope. Book a free consultation via the Contact page to discuss your requirements.",
  experience: "Rajiv is a Software Architect & Full Stack Developer, founder of Sirmint Technology. He builds production SaaS, AI products, and commerce platforms.",
  default: "Thanks for your message! For detailed questions, please use the Contact form or email rajivkapur@sirmint.com. You can also ask about: projects, tech stack, hiring."
};

function getReply(msg) {
  const lower = msg.toLowerCase();
  for (const key of Object.keys(responses)) {
    if (key !== 'default' && lower.includes(key)) return responses[key];
  }
  return responses.default;
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('chat-toggle');
  const close = document.getElementById('chat-close');
  const windowEl = document.getElementById('chat-window');
  const input = document.getElementById('chat-input');
  const send = document.getElementById('chat-send');
  const messages = document.getElementById('chat-messages');

  if (!toggle) return;

  toggle.addEventListener('click', () => windowEl.classList.toggle('hidden'));
  if (close) close.addEventListener('click', () => windowEl.classList.add('hidden'));

  function addMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.className = isUser
      ? 'bg-indigo-600 rounded-xl p-3 text-white ml-8'
      : 'bg-slate-800 rounded-xl p-3 text-slate-300 mr-8';
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function handleSend() {
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, true);
    input.value = '';
    setTimeout(() => addMessage(getReply(text)), 500);
  }

  send.addEventListener('click', handleSend);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });
});
