interface SkillPillProps {
  name: string;
}

const SkillPill = ({ name }: SkillPillProps) => {
  return (
    <span className="skill-pill px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm">
      {name}
    </span>
  );
};

export default SkillPill;
