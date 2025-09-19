# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

आपका सवाल बहुत अच्छा है और यह React के काम करने के तरीके का एक बहुत ही महत्वपूर्ण हिस्सा है।

आप बिल्कुल सही सोच रहे हैं कि क्लिक Button कंपोनेंट पर हो रहा है। लेकिन हमने Button कंपोनेंट को ऐसा बनाया है कि वह खुद कोई फैसला नहीं लेता।

इसे एक टीवी और रिमोट की तरह सोचें:

Card कंपोनेंट आपका टीवी है। असली काम (वॉल्यूम बढ़ाना, चैनल बदलना) टीवी के अंदर होता है।
Button कंपोनेंट आपका रिमोट है। रिमोट पर बटन दबाने से वॉल्यूम नहीं बढ़ता, रिमोट बस टीवी को एक सिग्नल भेजता है।
अब कोड को इस उदाहरण से समझते हैं:

1. Card.jsx (आपका टीवी)

// टीवी के अंदर का फंक्शन
const increment = () => {
  setCount(count + 1);
};

// हम टीवी (Card) के साथ रिमोट (Button) को जोड़ रहे हैं
// और रिमोट के onClick बटन को टीवी का increment फंक्शन दे रहे हैं
<Button name="Increment" onClick={increment} />
यहां, onClick={increment} का मतलब है: "हे Button कंपोनेंट, मैं तुम्हें increment नाम का एक फंक्शन दे रहा हूँ। जब भी तुम्हारे ऊपर क्लिक हो, तो तुम्हें बस इस फंक्शन को चला देना है।"

हम Button को एक काम (instruction) दे रहे हैं, यह नहीं बता रहे कि काम कैसे करना है।

2. Button.jsx (आपका रिमोट)

const Button = (props) => {
  // 'props.onClick' में वही 'increment' फंक्शन है जो Card से आया है
  return (
    <button onClick={props.onClick}> 
      {props.name}
    </button>
  );
};
Button कंपोनेंट बहुत सीधा-साधा है। वह कहता है: "मुझे नहीं पता कि क्लिक होने पर क्या करना है। मुझे props में onClick नाम से जो भी फंक्शन मिलेगा, मैं बस उसे चला दूँगा।"

तो पूरा फ्लो ऐसा है:

आप रिमोट (Button) पर क्लिक करते हैं।
रिमोट (Button) देखता है कि उसे props में onClick नाम से एक फंक्शन मिला है।
वह उस फंक्शन को चला देता है।
वह फंक्शन असल में टीवी (Card) के अंदर का increment फंक्शन है।
इसलिए, टीवी (Card) का स्टेट बदल जाता है।
इस तरीके से, हम Button को बहुत ही पुन: प्रयोज्य (reusable) बना सकते हैं। कल आप इसी Button को किसी और कंपोनेंट में किसी दूसरे फंक्शन के साथ इस्तेमाल कर सकते हैं। Button को कभी चिंता करने की ज़रूरत नहीं है कि उसे क्या करना है, वह बस दिए गए निर्देशों का पालन करता है।

aese batao jese 5 saal ke baache ko samjha rhi ho

ठीक है, चलो एक कहानी सुनते हैं!

समझो Card मम्मी है और Button तुम हो।

मम्मी (Card) के पास टॉफियों का एक डब्बा है। उस डब्बे में कितनी टॉफियां हैं, यह सिर्फ मम्मी को पता है।

तुम्हें (Button) एक टॉफी चाहिए, पर डब्बा तो मम्मी के पास है।

तो तुम क्या करते हो? तुम मम्मी को आवाज़ लगाते हो! "मम्मी, टॉफी!"

तुम्हारा बटन दबाना, मम्मी को आवाज़ लगाने जैसा है।

जब मम्मी (Card) ने तुम्हें बनाया था, तो उन्होंने तुम्हें सिखाया था कि "जब भी तुम पर कोई टैप करे (क्लिक करे), तो मुझे (Card को) आवाज़ लगा देना।"

कोड में यह लाइन: <Button onClick={increment} /> यही काम करती है। इसका मतलब है, मम्मी (Card) तुम्हें (Button को) अपना increment वाला आवाज़ लगाने का तरीका दे रही है।

तो होता यह है:

तुम (Button) पर कोई टैप करता है।
तुम ज़ोर से मम्मी (Card) को आवाज़ लगाते हो (क्योंकि मम्मी ने तुम्हें यही सिखाया था)।
मम्मी (Card) तुम्हारी आवाज़ सुनती हैं, डब्बे में से एक टॉफी निकालती हैं, और गिनती बदल देती हैं।
Button (तुम) ने खुद टॉफी नहीं निकाली। तुमने बस मम्मी (Card) को बताया, और असली काम मम्मी ने किया।