import { getProgrammeById } from '@/lib/programmes';
import ProgrammeDetail from '@/components/programme-detail';

export default function TeacherTrainingPage() {
  const p = getProgrammeById('teacher-training');
  if (!p) return null;
  return <ProgrammeDetail p={p} icon="👩🏫" />;
}
