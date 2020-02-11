import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import ListAltIcon from '@material-ui/icons/ListAlt';

import { withRouter } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        bottom: "5px",
        width: "200px",
    },
});

const Navbar = ({ history, location }) => {

    const getLocation = location.pathname.substring(1);
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        setValue(getLocation);
    },[getLocation])

    const handleChange = (event, newValue) => {
        history.push("/" + newValue)
        setValue(newValue);
    }

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction value="" label="Calculate" icon={<CompareArrowsIcon />} />
            <BottomNavigationAction value="list" label="Rates" icon={<ListAltIcon />} />
        </BottomNavigation>
    )
}

export default withRouter(Navbar);

