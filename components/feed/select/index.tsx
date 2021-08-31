export default function FeedSelect({ callback, list, defaultValue }) {
  return (
    <select onChange={callback} defaultValue={defaultValue}>
      {list.map((content, index) => {
        return (
          <option value={index + 1} key={index}>
            {content}
          </option>
        );
      })}
    </select>
  );
}
