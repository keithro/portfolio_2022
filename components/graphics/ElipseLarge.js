const ElipseLarge = (props) => {
  return (
    <svg
      width={274}
      height={274}
      viewBox="0 0 274 274"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={137}
        cy={137}
        r={136}
        stroke={props.stroke}
        // stroke="#FF2156"
        strokeWidth={2}
        strokeDasharray="4 4"
      />
    </svg>
  );
};

export default ElipseLarge;
