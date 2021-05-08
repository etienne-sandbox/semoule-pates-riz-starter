import { Counter } from "./Counter";

const JOURS = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

export function App() {
  return (
    <div className="box app">
      <h1 className="box title">Semoule - Pâtes - Riz</h1>
      <Counter
        value={2}
        label="Nombre de personnes"
        onDecrement={() => {
          /**/
        }}
        onIncrement={() => {
          /**/
        }}
        unitPlural="Personnes"
        unitSingle="Personne"
        background="linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)"
      />
      <Counter
        value={2}
        label="Stock pour"
        onDecrement={() => {
          /**/
        }}
        onIncrement={() => {
          /**/
        }}
        unitPlural="Semaines"
        unitSingle="Semaine"
        background="linear-gradient(315deg, #e79087 0%, #86785f 74%)"
      />
      <Counter
        value={70}
        label="Portion de pâtes"
        onDecrement={() => {
          /**/
        }}
        onIncrement={() => {
          /**/
        }}
        unitPlural="Grammes"
        unitSingle="Gramme"
        background="linear-gradient(115deg, #1fd1f9 0%, #b621fe 74%)"
      />
      <Counter
        value={60}
        label="Portion de riz"
        onDecrement={() => {
          /**/
        }}
        onIncrement={() => {
          /**/
        }}
        unitPlural="Grammes"
        unitSingle="Gramme"
        background="linear-gradient(115deg, #0abcf9 0%, #2c69d1 74%)"
      />
      <Counter
        value={80}
        label="Portion de semoule"
        onDecrement={() => {
          /**/
        }}
        onIncrement={() => {
          /**/
        }}
        unitPlural="Grammes"
        unitSingle="Gramme"
        background="linear-gradient(115deg, #b1bfd8 0%, #6782b4 74%)"
      />
      <div className="menu">
        <p className="menu--label">Menu de la semaine</p>
        <div className="menu--block">
          {JOURS.map((jourName) => {
            return (
              <div key={jourName} className="menu--line">
                <p className="menu--day">{jourName}</p>
                <div className="menu--selects">
                  <div className="menu--meal">
                    <p>Midi</p>
                    <select
                      value={"pates"}
                      onChange={(e) => {
                        /**/
                      }}
                    >
                      <option value="pates">Pates</option>
                      <option value="riz">Riz</option>
                      <option value="semoule">Semoule</option>
                    </select>
                  </div>
                  <div className="menu--meal">
                    <p>Soir</p>
                    <select
                      value={"riz"}
                      onChange={(e) => {
                        /**/
                      }}
                    >
                      <option value="pates">Pâtes</option>
                      <option value="riz">Riz</option>
                      <option value="semoule">Semoule</option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="needs">
        <p className="needs--label">Il vous faut</p>
        <div
          className="need"
          style={{
            backgroundImage: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
          }}
        >
          <h2>1kg de pâtes</h2>
          <p>Soit 2 paquets de 500g</p>
        </div>
        <div
          className="need"
          style={{
            backgroundImage: "linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%)",
          }}
        >
          <h2>1kg de riz</h2>
          <p>Soit 2 paquets de 500g</p>
        </div>
        <div
          className="need"
          style={{
            backgroundImage: "linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)",
          }}
        >
          <h2>1kg de semoule</h2>
          <p>Soit 2 paquets de 500g</p>
        </div>
      </div>
    </div>
  );
}
