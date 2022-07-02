const CrossMark = (props) => {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.832 12.008l8.6-8.58a2.008 2.008 0 10-2.84-2.84l-8.58 8.6-8.58-8.6a2.008 2.008 0 00-2.84 2.84l8.6 8.58-8.6 8.58a2 2 0 000 2.84 2.002 2.002 0 002.84 0l8.58-8.6 8.58 8.6a2.002 2.002 0 002.84 0 2 2 0 000-2.84l-8.6-8.58z"
        fill={props.fill}
      />
    </svg>
  );
};

export default CrossMark;
