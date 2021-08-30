export default function FeedSelect({ callback, list, defaultValue }) {
  return (
    <select onChange={callback}>
      {list.map((content, index) => (
        <option
          selected={defaultValue === content ? true : false}
          value={index + 1}
          key={index}
        >
          {content}
        </option>
      ))}
    </select>
  );
}
