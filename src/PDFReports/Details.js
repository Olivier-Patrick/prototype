import React from 'react';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ReactSpeedometer from "react-d3-speedometer"
import PieChart from '../Charts/PieChart'
import Radar from '../Charts/Radar'
import Information from '../Charts/Information'
import Card from '../Components/Card'
import BarChart from '../Charts/BarChart'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
// import Radar from './Radar'

export const Water = (consumedWater, recycledWater, lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }} >
        <Card title={lang.indic_1.title}
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    forceRender={true}
                    maxValue={Math.round((consumedWater / 1000) * 1.5)}
                    value={Math.round((consumedWater / 1000) * 10) / 10}
                    needleColor="purple"
                    startColor="dodgerblue"
                    segments={5}
                    endColor="darkblue"
                    textColor="grey"
                />
            }
        />
        <Card // title="Performance"
            content={
                <PieChart
                    height="95%"
                    width="95%"
                    legend={["Eaux consommées", "Eaux recyclées"]}
                    title={lang.indic_2.title}
                    titleFont='15'
                    colorList={['dodgerblue', '#92D050']}
                    data={[
                        { value: consumedWater, name: lang.indic_2.Element_2.label },
                        { value: recycledWater, name: lang.indic_2.Element_1.label },
                    ]}
                />
            }
        />
        <Card title={lang.indic_3.title}
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    forceRender={true}
                    maxValue={Math.round((recycledWater / 1000) * 1.3)}
                    value={Math.round((recycledWater / 1000) * 10) / 10}
                    needleColor="purple"
                    startColor="red"
                    endColor="limegreen"
                    segments={7}
                    textColor="grey"
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Recycle = (lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }} >
        <Card title={lang.indic_1.title}
            content={
                <BarChart
                    items={3}
                    barWidth='15%'
                    data1={[0]}
                    data2={[0]}
                    data3={[0]}
                    color1={'#92D050'}
                    color2={'#FF0000'}
                    color3={'#EBEB35'}
                    legend1='Verre'
                    legend2='Metal'
                    legend3='Plastique'
                    title={''}
                    legend={lang.indic_1.list}
                    time={['']}
                    height='90%'
                    width='90%'
                />
            }
        />
        <Card title={lang.indic_2.title}
            content={
                <BarChart
                    items={2}
                    barWidth='15%'
                    data1={[10]}
                    data2={[40]}
                    color1={'#C55A11'}
                    color2={'#5B9BD5'}
                    legend1='Organique'
                    legend2='Papier'
                    title={''}
                    legend={lang.indic_2.list}
                    time={['']}
                    height='90%'
                    width='90%'
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Waste = (lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }} >
        <Card title={lang.indic_1.title}
            content={
                <BarChart // [0.8, 1.75, 2.2]
                    items={3}
                    barWidth='15%'
                    data1={[7]}
                    data2={[15]}
                    data3={[19]}
                    color1={'#92D050'}
                    color2={'#FF0000'}
                    color3={'#EBEB35'}
                    legend1='Verre'
                    legend2='Metal'
                    legend3='Plastique'
                    title={''}
                    legend={lang.indic_1.list}
                    time={['']}
                    height='90%'
                    width='90%'
                />
            }
        />
        <Card title={lang.indic_2.title}
            content={
                <BarChart
                    items={2}
                    barWidth='15%'
                    data1={[10]}
                    data2={[40]}
                    color1={'#C55A11'}
                    color2={'#5B9BD5'}
                    legend1='Organique'
                    legend2='Papier'
                    title={''}
                    legend={lang.indic_2.list}
                    time={['']}
                    height='90%'
                    width='90%'
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Transport = (lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }} >
        <Card title={lang.indic_1.desc}
            content={// [78, 66, 3, 12, 6]
                <BarChart
                    items={5}
                    barWidth='15%'
                    data1={[78]}
                    data2={[66]}
                    data3={[3]}
                    data4={[12]}
                    data5={[6]}
                    color1={'#A0A0A0'}
                    color2={'#C06020'}
                    color3={'#5B9BD5'}
                    color4={'#92D050'}
                    color5={'orange'}
                    legend1={lang.indic_1.list[0]}
                    legend2={lang.indic_1.list[1]}
                    legend3={lang.indic_1.list[2]}
                    legend4={lang.indic_1.list[3]}
                    legend5={lang.indic_1.list[4]}
                    title={''}
                    legend={null}
                    time={['']}
                    height='85%'
                    width='85%'
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Energy = (consumedEnergy, producedEnergy, lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }}>
        <Card title={lang.indic_1.title}
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    forceRender={true}
                    maxValue={Math.round((consumedEnergy / 1000) * 1.7)}
                    value={Math.round((consumedEnergy / 1000) * 10) / 10}
                    needleColor="purple"
                    startColor="limegreen"
                    endColor="red"
                    segments={7}
                    textColor="grey"
                />
            }
        />
        <Card //title="Performance"
            content={
                <PieChart
                    height="95%"
                    width="95%"
                    title={lang.indic_4.title}
                    colorList={['dodgerblue', 'forestgreen', '#040238', '#30141b']}
                    data={[
                        { value: consumedEnergy - producedEnergy, name: lang.indic_4.Element_2.label },
                        { value: producedEnergy, name: lang.indic_4.Element_1.label }]}
                />
            }
        />
        <Card title={lang.indic_2.title}
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    forceRender={true}
                    maxValue={Math.round((producedEnergy / 1000) * 1.2)}
                    value={Math.round((producedEnergy / 1000) * 10) / 10}
                    needleColor="purple"
                    startColor="red"
                    endColor="limegreen"
                    segments={7}
                    textColor="grey"
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Flora = (stat, lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 190, padding: 10 }}>
        <Card title={lang.state_0}
            content={
                <Information
                    info={stat[2]}
                    icon={"/images/indicators/biodiv/good.png"}
                    measure={true}
                />
            }
        />
        <Card title={lang.state_1}
            content={
                <Information
                    info={stat[1]}
                    icon={"/images/indicators/biodiv/bad.png"}
                    measure={true}
                />
            }
        />
        <Card title={lang.state_2}
            content={
                <Information
                    info={stat[0]}
                    icon={"/images/indicators/biodiv/dangerx.png"}
                    measure={true}
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Fauna = (stat, lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 190, padding: 10 }}>
        <Card title={lang.state_0}
            content={
                <Information
                    info={stat[2]}
                    icon={"/images/indicators/biodiv/good.png"}
                    measure={true}
                />
            }
        />
        <Card title={lang.state_1}
            content={
                <Information
                    info={stat[1]}
                    icon={"/images/indicators/biodiv/bad.png"}
                    measure={true}
                />
            }
        />
        <Card title={lang.state_2}
            content={
                <Information
                    info={stat[0]}
                    icon={"/images/indicators/biodiv/dangerx.png"}
                    measure={true}
                />
            }
        />
    </ExpansionPanelDetails>
)

// export const Carbon = (Energy, Water, Transport, Waste, Other, data2, lang) => (
export const Carbon = (data, data2, lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 420, padding: 10 }}>
        <Card // title="Radar des performances"
            content={
                <Radar
                    name="Performance par secteur"
                    legends={lang}
                    // data={[
                    //     Transport,
                    //     Energy,
                    //     Water,
                    //     Waste,
                    //     Other
                    // ]}
                    data={data}
                    data2={data2}
                />
            }
        />
    </ExpansionPanelDetails>
)

export const General = (lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'column', display: 'flex', height: 540, padding: 10 }} >
        <div style={{ margin: 10, flex: 1, fontSize: 20, textAlign: 'center' }} >
            {lang.partie1.desc1}
        </div>
        <Typography variant="h6" style={{ marginLeft: 20, textAlign: 'center' }} >{lang.partie1.title2}</Typography>
        <div style={{ margin: 10, flex: 1, fontSize: 20, textAlign: 'center' }} >
            {lang.partie1.desc2}
        </div>
        <Typography variant="h6" style={{ marginLeft: 20, textAlign: 'center' }} >{lang.partie1.title3}</Typography>
        <div style={{ margin: 10, flex: 1, fontSize: 20, textAlign: 'center' }} >
            {lang.partie1.desc3}
        </div>
        <Typography variant="h6" style={{ marginLeft: 20, textAlign: 'center' }} >{lang.partie1.title4}</Typography>
        <div style={{ margin: 10, flex: 1, fontSize: 20, textAlign: 'center' }} >
            {lang.partie1.desc4}
        </div>
    </ExpansionPanelDetails>
)

export const Identity = (reference, date, period, place, lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 100, padding: 10 }}>
        <form className={""} noValidate autoComplete="off" >
            <TextField
                style={{ width: 280, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label={lang.partie2.option1}
                value={reference}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 280, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label={lang.partie2.option2}
                value={date}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 280, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label={lang.partie2.option31}
                value={period}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 320, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label={lang.partie2.option41}
                value={place}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
        </form>
    </ExpansionPanelDetails>
)

export const Remarks = (lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'column', display: 'flex', height: 405   , padding: 10 }}>
        <Card title={lang} content={<div style={{ height: '80%', width: '100%', backgroundColor: 'whitesmoke' }} />} />
    </ExpansionPanelDetails>
)

export const People = (diffusion, precision, generatedby, authorizedby, lang) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 100, padding: 10 }}>
        <form className={""} noValidate autoComplete="off" >
            <TextField
                style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label={lang.partie3.diffusion}
                value={diffusion}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label={lang.partie3.option2}
                value={precision}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label={lang.partie3.option3}
                value={generatedby}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label={lang.partie3.option4}
                value={authorizedby}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
        </form>
    </ExpansionPanelDetails>
)
