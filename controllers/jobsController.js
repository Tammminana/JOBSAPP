const createJob = async (req,res) =>{
    res.send('createJob');
}

const deleteJob = async (req,res) =>{
    res.send('deleteJob');
}

const getAllJobs = async (req,res) =>{
    res.send('getAllJobs');
}

const updateJob = async (req,res) =>{
    res.send('patchjob');
}

const showStats = async (req,res) =>{
    res.send('showstats');
}

export {createJob , deleteJob , getAllJobs , updateJob , showStats}

