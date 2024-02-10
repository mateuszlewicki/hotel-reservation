from dataclasses import dataclass
from typing import Any


@dataclass
class User:
    user_id: int
    username: str
    password: str
    first_name: str
    last_name: str
    email: str
    avatar: any 
