import React from 'react';
import { Lock, Code, Database, ShieldCheck } from 'lucide-react';

const TrustBadge: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              Engineering, <span className="text-text-secondary">not just Integration.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-surface rounded-3xl p-8 border border-white/5">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <Code className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Source Ownership</h3>
                <p className="text-text-secondary leading-relaxed">
                   We deliver full repositories. No vendor lock-in. You get the Terraform state, Dockerfiles, and source code.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface rounded-3xl p-8 border border-white/5">
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
                <p className="text-text-secondary leading-relaxed">
                   PII redaction pipelines, secure Auth via Clerk, and OWASP LLM Top 10 compliance built-in.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface rounded-3xl p-8 border border-white/5">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Data Sovereignty</h3>
                <p className="text-text-secondary leading-relaxed">
                   We prefer local fine-tuning or private VPC deployments. Your data never trains public models.
                </p>
            </div>

        </div>

        {/* Visual Code Block */}
        <div className="mt-8 bg-zinc-900 rounded-3xl border border-white/5 p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Ready for Audit.</h3>
                    <p className="text-text-secondary">SOC2 Type II ready architecture deployed by default.</p>
                 </div>
                 <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 font-mono text-xs md:text-sm text-text-secondary border border-white/10 shadow-2xl w-full md:w-auto min-w-[300px]">
                    <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <p className="text-purple-400">module <span className="text-blue-400">"secure_agent_cluster"</span> <span className="text-white">{`{`}</span></p>
                    <p className="pl-4">source = <span className="text-green-400">"./modules/agent_core"</span></p>
                    <p className="pl-4">encryption = <span className="text-blue-400">true</span></p>
                    <p className="pl-4">compliance = <span className="text-green-400">"HIPAA_High"</span></p>
                    <p className="text-white">{`}`}</p>
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBadge;