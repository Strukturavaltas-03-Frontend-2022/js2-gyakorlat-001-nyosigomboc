const taggedTemplate = (texts, ...values) =>
    texts.map((text, index) => `${text.trim() !== '' ? `<em>${text}</em>`:''}${index < values.length ? `<strong>${values[index]}</strong>`:''}`).join('')

export default taggedTemplate;
