const ElipseSmall = (props) => {
  return (
    <svg
      width={115}
      height={115}
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={57.5}
        cy={57.5}
        r={56.5}
        stroke={props.stroke}
        strokeWidth={2}
        strokeDasharray="4 4"
      />
    </svg>
  );
};

export default ElipseSmall;
