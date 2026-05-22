const statsData = {

  odi: {
    matches: "273",
    runs: "11168",
    average: "48.76",
    hundreds: "32",
    doubleHundreds: "3",
    highest: "264",

    records: [
      "✓ Highest Individual Score in ODI: 264",
      "✓ Most Double Centuries in ODI: 3",
      "✓ Most Centuries as Opener in ODI",
      "✓ One of the Few to Score 3 Double Centuries",
      "✓ Multiple 150+ ODI scores — among the highest in history.",
      "✓ Former ICC ODI Player of the Year",
      "✓ Most centuries in a single Cricket World Cup: 5 centuries in 2019 WC."
    ]
  },

  test: {
    matches: "59",
    runs: "4137",
    average: "45.46",
    hundreds: "12",
    doubleHundreds: "1",
    highest: "212",

    records: [
      "✓ Multiple Test Centuries",
      "✓ Successful Test Opener",
      "✓ Double Century in Tests",
      "✓ Strong Home Test Record",
      "✓ Test batting average around 45+",
      "✓ Highest Test score: 212 vs South Africa",
      "✓ Centuries in both home and overseas conditions"
    ]
  },

  t20: {
    matches: "151",
    runs: "3974",
    average: "31.32",
    hundreds: "5",
    doubleHundreds: "0",
    highest: "121",

    records: [
      "✓ Most T20I Centuries",
      "✓ T20 World Cup Winner",
      "✓ Explosive Powerplay Batter",
      "✓ Legendary T20 Opener",
      "5 T20I centuries — among the most in history",
      "✓ Explosive powerplay batting record",
      "✓ Captain of India in multiple ICC tournaments"

    ]
  },

  ipl: {
    matches: "257",
    runs: "6628",
    average: "29.72",
    hundreds: "2",
    doubleHundreds: "0",
    highest: "109",

    records: [
      "✓ 5-Time IPL Winning Captain",
      "✓ Mumbai Indians Legend",
      "✓ IPL Run Machine",
      "✓ Multiple Match Winning Knocks",
      "✓ Most successful IPL captain alongside top captains",
      "✓ Numerous match-winning knocks in playoffs/finals",
      "✓ One of the most capped IPL players"

    ]
  }
};

function changeStats(button, format) {

  document.getElementById("matches").innerText =
    statsData[format].matches;

  document.getElementById("runs").innerText =
    statsData[format].runs;

  document.getElementById("average").innerText =
    statsData[format].average;

  document.getElementById("hundreds").innerText =
    statsData[format].hundreds;

  document.getElementById("doubleHundreds").innerText =
    statsData[format].doubleHundreds;

  document.getElementById("highest").innerText =
    statsData[format].highest;

  const recordEls = document.querySelectorAll('.records p');
  recordEls.forEach((el, i) => {
    el.innerText = statsData[format].records[i] || '';
  });

  const buttons =
    document.querySelectorAll(".format-btn");

  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}
