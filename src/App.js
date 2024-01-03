import "./App.css";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
  Slider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  components: {
    // Name of the component
    MuiSelect: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Poppins, sans-serif",
        },
        select: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
  },
});

function App() {
  const [step, setStep] = React.useState(1);

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
    setStep(1);
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  const [info, setInfo] = React.useState({
    method: "",
    farm: "",
    fertilizer: "",
    water: 0,
    pesticide: null,
    pesticideValue: 0,
    area: 0,
    changes: null,
    changesValue: "",
    fuel: null,
    fuelValue1: "",
    fuelValue2: 0,
  });

  const titles = [
    "Cultivos predominantes",
    "Prácticas Agrícolas",
    "Superficie cultivada por tipo de cultivo",
    "Datos cambio de suelo",
    "Consumo de energías",
  ];

  const handleChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  return (
    <div className="body">
      <section id="bigcontainer">
        <div id="container1">
          <img
            className="logo"
            src={require("./assets/logo_corpoguavio.png")}
            alt=""
          />
        </div>
        {/* ----------SideBar------------ */}
        <div className="w3-sidebar" id="mySidebar">
          <div
            id="sidebar"
            className="sample-sidebar i-amphtml-element i-amphtml-layout-nodisplay i-amphtml-overlay i-amphtml-scrollable i-amphtml-built i-amphtml-layout"
            layout="nodisplay"
            side="right"
            i-amphtml-layout="nodisplay"
            role="menu"
            tabindex="-1"
            open=""
            i-amphtml-sidebar-opened=""
          >
            {step < 6 && (
              <div class="header">
                <div class="titulo">
                  <div>
                    <h3>{titles[step - 1]}</h3>
                  </div>
                  <div class="pagenumber">
                    <h3>{step}/5</h3>
                  </div>
                </div>
              </div>
            )}
            {step === 1 && (
              <div class="opciones">
                <div>
                  <p class="textopregunta">
                    ¿Cual es el cultivo que predomina?
                  </p>
                </div>
                <div class="slidecontainer">
                  <div>
                    <FormControl fullWidth>
                      <InputLabel theme={theme} id="demo-simple-select-label">
                        Cultivo
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        name="farm"
                        value={info.farm}
                        onChange={handleChange}
                        id="demo-simple-select"
                        label="Cultivo"
                        theme={theme}
                      >
                        <MenuItem value={""}></MenuItem>
                        <MenuItem value={"maiz"}>Maíz</MenuItem>
                        <MenuItem value={"papa"}>Papa</MenuItem>
                        <MenuItem value={"arracacha"}>Arracacha</MenuItem>
                        <MenuItem value={"calabaza"}>Calabaza</MenuItem>
                        <MenuItem value={"frijol"}>Frijol</MenuItem>
                        <MenuItem value={"flores"}>Flores</MenuItem>
                        <MenuItem value={"hortalizas"}>Hortalizas</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div class="opciones">
                <div>
                  <p class="textopregunta">¿Cuál técnica de siembra utiliza?</p>
                </div>
                <div class="slidecontainer">
                  <div>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="method"
                        value={info.method}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          theme={theme}
                          value="labranza"
                          control={<Radio />}
                          label="Labranza"
                        />
                        <FormControlLabel
                          theme={theme}
                          value="surco"
                          control={<Radio />}
                          label="Surco"
                        />
                        <FormControlLabel
                          theme={theme}
                          value="vivero"
                          control={<Radio />}
                          label="Vivero"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div>
                  <p class="textopregunta">¿Que tipo de fertilizante usa?</p>
                </div>
                <div class="slidecontainer">
                  <div>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label-2"
                        defaultValue=""
                        name="fertilizer"
                        value={info.fertilizer}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          theme={theme}
                          value="organico"
                          control={<Radio />}
                          label="Orgánico"
                        />
                        <FormControlLabel
                          theme={theme}
                          value="quimico"
                          control={<Radio />}
                          label="Quimico"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div>
                  <p class="textopregunta">
                    ¿Cuanto litros de agua usas al mes?
                  </p>
                </div>
                <div class="slidecontainer">
                  <div>
                    <div class="numeradorcontainer">
                      <p class="numerador">
                        {info.water} {info.water === 1 ? "Litro" : "Litros"}
                      </p>
                    </div>
                    <Slider
                      style={{ width: "80vh", marginLeft: "20px" }}
                      defaultValue={0}
                      name="water"
                      value={info.water}
                      onChange={handleChange}
                      aria-label="slider"
                      valueLabelDisplay="auto"
                    />
                  </div>
                </div>
                <div>
                  <p class="textopregunta">¿Usas Pesticidas?</p>
                </div>
                <div class="slidecontainer">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label-3"
                      defaultValue=""
                      name="pesticide"
                      value={info.pesticide}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        theme={theme}
                        value={true}
                        control={<Radio />}
                        label="Si"
                      />
                      <FormControlLabel
                        theme={theme}
                        value={false}
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                {info.pesticide === "true" && (
                  <>
                    <div>
                      <p class="textopregunta">
                        Cantidad de pesticidas en litros
                      </p>
                    </div>
                    <div class="slidecontainer">
                      <FormControl>
                        <div class="numeradorcontainer">
                          <p class="numerador">
                            {info.pesticideValue}{" "}
                            {info.pesticideValue === 1 ? "Litro" : "Litros"}
                          </p>
                        </div>
                        <div>
                          <Slider
                            style={{ width: "80vh", marginLeft: "20px" }}
                            defaultValue={0}
                            name="pesticideValue"
                            value={info.pesticideValue}
                            onChange={handleChange}
                            aria-label="slider"
                            valueLabelDisplay="auto"
                          />
                        </div>
                      </FormControl>
                    </div>
                  </>
                )}
              </div>
            )}
            {step === 3 && (
              <div class="opciones">
                <div>
                  <p class="textopregunta">
                    ¿Cuál es el area que tienes sembrada? (aprox. en m2)
                  </p>
                </div>
                <div class="slidecontainer">
                  <div>
                    <FormControl fullWidth>
                      <InputLabel theme={theme} id="demo-simple-select-label">
                        Área de siembra
                      </InputLabel>
                      <Input
                        value={info.area}
                        theme={theme}
                        name="area"
                        onChange={handleChange}
                        type="number"
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
            )}
            {step === 4 && (
              <div class="opciones">
                <div>
                  <p class="textopregunta">¿Hubo cambio en el uso de suelo?</p>
                </div>
                <div class="slidecontainer">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label-4"
                      defaultValue=""
                      name="changes"
                      value={info.changes}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        theme={theme}
                        value={true}
                        control={<Radio />}
                        label="Si"
                      />
                      <FormControlLabel
                        theme={theme}
                        value={false}
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                {info.changes === "true" && (
                  <>
                    <div>
                      <p class="textopregunta">¿Que cambió?</p>
                    </div>
                    <div class="slidecontainer">
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label-4"
                          defaultValue=""
                          name="changesValue"
                          value={info.changesValue}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            theme={theme}
                            value="cambio de cultivo"
                            control={<Radio />}
                            label="Cambio de cultivo"
                          />
                          <FormControlLabel
                            theme={theme}
                            value="bosques a tierra agricola"
                            control={<Radio />}
                            label="Bosques a tierra agrícola"
                          />
                          <FormControlLabel
                            theme={theme}
                            value="reforestacion"
                            control={<Radio />}
                            label="Reforestación"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </>
                )}
              </div>
            )}
            {step === 5 && (
              <div class="opciones">
                <div>
                  <p class="textopregunta">
                    ¿Usas maquinaria que use combustibles fósiles?
                  </p>
                </div>
                <div class="slidecontainer">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label-5"
                      defaultValue=""
                      name="fuel"
                      value={info.fuel}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        theme={theme}
                        value={true}
                        control={<Radio />}
                        label="Si"
                      />
                      <FormControlLabel
                        theme={theme}
                        value={false}
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                {info.fuel === "true" && (
                  <>
                    <div>
                      <p class="textopregunta">
                        ¿Usas maquinaria que use combustibles fósiles?
                      </p>
                    </div>
                    <div class="slidecontainer">
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label-5"
                          defaultValue=""
                          name="fuelValue1"
                          value={info.fuelValue1}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            theme={theme}
                            value="gasolina"
                            control={<Radio />}
                            label="Gasolina"
                          />
                          <FormControlLabel
                            theme={theme}
                            value="diesel"
                            control={<Radio />}
                            label="Diesel"
                          />
                          <FormControlLabel
                            theme={theme}
                            value="gas natural"
                            control={<Radio />}
                            label="Gas Natural"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </>
                )}
                {info.fuelValue1 && (
                  <div class="slidecontainer">
                    <div>
                      <p class="textopregunta">
                        ¿Cuál es el consumo mensual en litros de combustible de
                        tu maquinaria?
                      </p>
                    </div>
                    <div class="slidecontainer">
                      <div>
                        <div class="numeradorcontainer">
                          <p class="numerador">
                            {info.fuelValue2}{" "}
                            {info.fuelValue2 === 1 ? "Litro" : "Litros"}
                          </p>
                        </div>
                        <Slider
                          style={{ width: "80vh", marginLeft: "20px" }}
                          defaultValue={0}
                          value={info.fuelValue2}
                          name="fuelValue2"
                          aria-label="slider"
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {step === 6 && (
              <div
                id="sidebar6"
                class="sample-sidebar i-amphtml-element i-amphtml-layout-nodisplay i-amphtml-overlay i-amphtml-scrollable i-amphtml-built i-amphtml-layout"
                layout="nodisplay"
                side="right"
                i-amphtml-layout="nodisplay"
                role="menu"
                tabindex="-1"
                open=""
                i-amphtml-sidebar-opened=""
              >
                <div class="header">
                  <div class="titulo">
                    <div>
                      <h3>Tus resultados</h3>
                    </div>
                  </div>
                </div>
                <div class="opciones">
                  <div class="slidecontainer2visible">
                    <div>
                      <p class="numero">2.3</p>
                    </div>
                    <div class="unidades">
                      <p>ton CO2</p>
                    </div>
                    <div class="texto">
                      Segun los datos ingresados, esta es la cantidad de
                      emisiones de CO2 que sus cultivos emiten
                    </div>
                  </div>
                  <div class="compensación">
                    <div>
                      <p class="numero">7</p>
                    </div>
                    <div class="unidades">
                      <div class="unidades">
                        <p>árboles</p>
                      </div>
                      <div class="texto" style={{ fontWeight: "700" }}>
                        Para comprensar la huella de tu práctica agrícola.
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "40px",
                    }}
                  >
                    <img
                      className="logo"
                      src={require("./assets/logo_corpoguavio.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div class="navigation_end">
                  <div>
                    <button class="next">
                      Comprar árboles
                      <span style={{ fontSize: "24px", fontWeight: "400" }}>
                        &#62;
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {step < 6 && (
              <div class="navigation">
                <div class="">
                  <button
                    class="prev"
                    onClick={() => {
                      if (step !== 1) {
                        setStep(step - 1);
                      } else {
                        w3_close();
                      }
                    }}
                  >
                    ATRÁS
                  </button>
                </div>
                <div>
                  <button
                    class="next"
                    onClick={() => {
                      if (step !== 6) setStep(step + 1);
                    }}
                  >
                    {step !== 5 ? "SIGUIENTE" : "RESULTADO"}
                    <span style={{ fontSize: "24px", fontWeight: "400" }}>
                      &gt;
                    </span>{" "}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ----------Content Page------------ */}
        <div
          className="w3-overlay"
          onClick={w3_close}
          style={{ cursor: "pointer" }}
          id="myOverlay"
        ></div>
        <div id="subcontainer">
          <div id="container2">
            <div id="container2A">
              <div className="Titulo2">
                <h1>Calcule la huella de carbono de tu cultivo </h1>
              </div>
              {/*<h3>En 5 sencillos pasos</h3>*/}
              <p>
                Infórmate sobre el impacto que tienen tus prácticas agrícolas
                sobre el cambio climático y de mecanismos para compensarlo.
              </p>
              <button className="button1" onClick={w3_open}>
                Comenzar ahora
              </button>
            </div>
          </div>
          <div id="container3">
            <img
              decoding="async"
              alt="Jungle"
              width={"100%"}
              height={"100%"}
              src={require("./assets/pngegg.png")}
              className="i-amphtml-fill-content i-amphtml-replaced-content img_body"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
