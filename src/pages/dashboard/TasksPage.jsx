import GlassCard from '../../components/ui/GlassCard';
import ProgressBar from '../../components/ui/ProgressBar';
import Badge from '../../components/ui/Badge';
import { tasks } from '../../data/tasks';

export default function TasksPage() {
  const completed = tasks.filter((t) => t.status === 'Completed').length;
  const inProgress = tasks.filter((t) => t.status === 'In Progress').length;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Total Tasks', value: tasks.length, color: 'text-[#c3c0ff]' },
          { label: 'Completed', value: completed, color: 'text-[#4cd7f6]' },
          { label: 'In Progress', value: inProgress, color: 'text-[#d0bcff]' },
        ].map((s) => (
          <GlassCard key={s.label}>
            <p className="text-[#c7c4d8] font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase mb-2">{s.label}</p>
            <p className={`font-[Sora] text-4xl font-bold ${s.color}`}>{s.value}</p>
          </GlassCard>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-4">
        <h3 className="font-[Sora] text-2xl font-semibold text-[#e5e1e4]">Active Tasks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map((task) => {
            const iconColorMap = {
              secondary: 'text-[#4cd7f6] bg-[#4cd7f6]/10',
              primary: 'text-[#c3c0ff] bg-[#c3c0ff]/10',
              tertiary: 'text-[#d0bcff] bg-[#d0bcff]/10',
            };
            const progressColor = task.status === 'Completed' ? 'secondary' : 'gradient';

            return (
              <GlassCard key={task.id} className={`${task.status === 'Completed' ? 'opacity-70' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconColorMap[task.iconColor]}`}>
                      <span className="material-symbols-outlined">{task.icon}</span>
                    </div>
                    <div>
                      <p className="font-[Inter] font-bold text-[#e5e1e4] text-sm">{task.title}</p>
                      <p className="text-[10px] font-[Inter] text-[#c7c4d8] uppercase tracking-wider">{task.category}</p>
                    </div>
                  </div>
                  <Badge status={task.status} />
                </div>
                <p className="text-[#c7c4d8] font-[Inter] text-xs mb-4 leading-relaxed">{task.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#c7c4d8] font-[Inter] text-xs">Progress</span>
                    <span className="font-[JetBrains_Mono] text-xs text-[#e5e1e4]">{task.progress}%</span>
                  </div>
                  <ProgressBar value={task.progress} color={progressColor} />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-[#c7c4d8] font-[Inter]">
                    <span className="material-symbols-outlined text-sm text-[#4cd7f6]">redeem</span>
                    {task.reward}
                  </span>
                  {task.deadline && (
                    <span className="text-[10px] text-[#c7c4d8]/60 font-[Inter]">Due: {task.deadline}</span>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
