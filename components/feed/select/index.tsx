export default function FeedSelect({ callback, list }) {
  return (
    <select onChange={callback}>
      {list.map((content, index) => (
        <option value={index + 1} key={index}>
          {content}
        </option>
      ))}
    </select>
  );
}
