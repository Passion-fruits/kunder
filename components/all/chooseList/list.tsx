interface props {
  list: any[];
  now: string;
  checkStyle: any;
  callback(e): void;
  name: string;
}

export default function List({ list, now, checkStyle, callback, name }: props) {
  return (
    <>
      {list.map((res) => (
        <label key={res} style={res === now ? checkStyle : {}}>
          <input
            type="radio"
            name={name}
            value={res}
            onClick={() => callback(res)}
          />
          {res}
        </label>
      ))}
    </>
  );
}
