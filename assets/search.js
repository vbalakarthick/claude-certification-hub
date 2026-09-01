const INDEX = [
{t:"Associate – Foundations",u:"certifications/associate-foundations.html",d:"Prompting, evaluation, workflows, governance, model selection, Projects and troubleshooting."},
{t:"Developer – Foundations",u:"certifications/developer-foundations.html",d:"Claude API, production prompting, tools, agents, Claude Code, MCP, evals and security."},
{t:"Architect – Foundations",u:"certifications/architect-foundations.html",d:"Agentic architecture, MCP, Claude Code workflows, prompts, context, reliability and cost."},
{t:"Architect – Professional",u:"certifications/architect-professional.html",d:"Enterprise architecture, integration, safety, evaluation gates, stakeholders and operations."},
{t:"Prompt Engineering",u:"learn/prompt-engineering.html",d:"Clear instructions, examples, XML structure, constraints and long-context prompting."},
{t:"Context Engineering",u:"learn/context-engineering.html",d:"Context windows, caching, long-context strategy, memory boundaries and context budgets."},
{t:"Tool Use & MCP",u:"learn/tool-use-mcp.html",d:"Tool schemas, tool loops, permissions, Model Context Protocol and secure integrations."},
{t:"RAG",u:"learn/rag.html",d:"Retrieval, chunking, grounding, citations, evaluation and RAG architecture."},
{t:"Agents",u:"learn/agents.html",d:"Agent loops, orchestration, human approval, budgets, memory and failure recovery."},
{t:"Evaluation & Safety",u:"learn/evaluation-safety.html",d:"Evals, graders, regression testing, tracing, prompt injection, governance and responsible AI."},
{t:"Study Roadmaps",u:"roadmaps.html",d:"7-day and 14-day preparation plans for all four Claude certifications."},
{t:"Practice Lab",u:"practice.html",d:"Original concept-based scenario questions. No exam dumps."},
{t:"Exam Logistics",u:"exam-logistics.html",d:"Eligibility, Pearson delivery, scoring, retakes, recertification, discounts and exam-day details."},
{t:"Certification Updates",u:"updates.html",d:"Dated log of meaningful program changes."},
{t:"Official Resources",u:"resources.html",d:"Anthropic Partner Academy, exam guides, prep paths, docs, MCP and Claude learning links."}
];
const q=document.getElementById('searchInput'), out=document.getElementById('searchResults');
if(q&&out){const render=()=>{const s=q.value.trim().toLowerCase();out.innerHTML='';if(!s)return;INDEX.filter(x=>(x.t+' '+x.d).toLowerCase().includes(s)).slice(0,12).forEach(x=>{let a=document.createElement('a');a.className='search-result';a.href=x.u;a.innerHTML=`<strong>${x.t}</strong><span>${x.d}</span>`;out.appendChild(a)});if(!out.children.length)out.innerHTML='<p class="kicker">No matches yet.</p>'};q.addEventListener('input',render);}
