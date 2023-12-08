import Container from './Container';

export const statusLabelClasses = {
  valid: {
    text: 'text-green-light',
    bg: 'bg-green-light',
  },
  pendding: {
    text: 'text-orange-normal',
    bg: 'bg-orange-normal',
  },
  critical: {
    text: 'text-red-normal',
    bg: 'bg-red-normal',
  },
};

type StatusType = 'valid' | 'critical' | 'pendding';

interface StatusLabelProps {
  label: string;
  color: StatusType;
}

const StatusLabel = (props: StatusLabelProps) => {
  return (
    <Container flexDirection="row" className="flex items-center gap-2">
      <div
        className={`h-[6px] w-[6px] rounded-full ${
          statusLabelClasses[props.color].bg
        }`}
      />
      <span className={`${statusLabelClasses[props.color].text} text-[12px]`}>
        {props.label}
      </span>
    </Container>
  );
};

export default StatusLabel;
