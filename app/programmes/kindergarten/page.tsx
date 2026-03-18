import { getProgrammeById } from '@/lib/programmes';
import ProgrammeDetail from '@/components/programme-detail';

export default function KindergartenPage() {
  const p = getProgrammeById('kindergarten');
  if (!p) return null;
  return <ProgrammeDetail p={p} icon="🎓" />;
}
