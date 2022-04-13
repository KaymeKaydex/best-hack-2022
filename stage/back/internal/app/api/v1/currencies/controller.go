package currencies

type Controller struct {
}

func New() (*Controller, error) {
	return &Controller{}, nil
}
