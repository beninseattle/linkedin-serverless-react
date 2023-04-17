import React from 'react';

type ChecklistProps = {
  descriptionText: string;
  headerText: string;
  id: string;
  items: string[];
}

const Checklist: React.FC<ChecklistProps> = ({
  descriptionText,
  headerText,
  id,
  items
}) => {
  return (
    <section className="checklist" id={id}>
      <h2 dangerouslySetInnerHTML={{ __html: headerText }} />
      <p dangerouslySetInnerHTML={{ __html: descriptionText }} />
      <ul>
        { items.map(a => <li dangerouslySetInnerHTML={{ __html: a }} />) }
      </ul>
    </section>
  );
}

export default Checklist;