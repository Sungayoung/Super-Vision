import MarkdownRenderer from "../../Components/Commons/MarkdownRenderer";
import { useEffect, useState } from "react";

function QuickStart() {
  const [installMarkdownText, setMarkdownText] = useState<string>('')
  const [excuteMarkdownText, setExcuteMarkdownText] = useState<string>('')

  useEffect(() => {

    fetch(require('../../Assets/Text/installQuickstart.md'))
    .then(res => res.text())
    .then(text => setMarkdownText(text))
    
    fetch(require('../../Assets/Text/excuteQuickstart.md'))
    .then(res => res.text())
    .then(text => setExcuteMarkdownText(text))

  }, []);

  return (
    <>
      <h1>QuickStart</h1>
      <div style={{width: '80%'}}>
        <MarkdownRenderer text={installMarkdownText} />
        <MarkdownRenderer text={excuteMarkdownText} />
      </div>
    </>
  );
}

export default QuickStart;
