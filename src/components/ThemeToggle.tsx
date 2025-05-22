interface Props {
  onToggle: () => void;
}

export function ThemeToggle({ onToggle }: Props) {
  return <button onClick={onToggle}>Сменить тему</button>;
}
