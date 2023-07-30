function skillsMember()
{
    return function (req, res, next)
    {
        var skills = req.body.skills;
        if (!skills) {
            req.body.skills = [];
        }
        else {
            if (typeof skills === 'string') {
                req.body.skills = skills.split(',');
            }
        }
        next();
    };
}